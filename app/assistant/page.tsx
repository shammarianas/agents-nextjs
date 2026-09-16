'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AvatarStage } from '../components/avatar/AvatarStage';
import { AvatarStatus } from '../components/avatar/AvatarStatus';
import { DemoControls } from '../components/DemoControls';
import { CameraPermissionModal } from '../components/camera/CameraPermission';
import { ConversationState, ConfigStatusResponse, CameraStatus } from '../types';
import { Clock3, Database, Mic2, UserRound } from 'lucide-react';

export default function AssistantPage() {
  const [conversationState, setConversationState] = useState<ConversationState>('idle');
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [missingConfig, setMissingConfig] = useState<string[]>([]);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [configStatus, setConfigStatus] = useState<ConfigStatusResponse | null>(null);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);

  // Combined camera & mic media state
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>('off');

  const fetchConfigStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        setConfigStatus(data.config);
        if (data.missingConfig) setMissingConfig(data.missingConfig);
      }
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchConfigStatus();
  }, [fetchConfigStatus]);

  // Unified start conversation handler requesting both Mic & Camera simultaneously
  const handleStartConversation = async () => {
    try {
      setErrorMessage(null);
      setConversationState('initializing');

      let userCombinedStream: MediaStream | null = null;
      let camState: CameraStatus = 'off';

      // 1. Single combined prompt for both Microphone and Camera
      if (typeof window !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
        try {
          userCombinedStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: 'user',
            },
          });
          camState = 'active';
        } catch (mediaErr: unknown) {
          console.warn('Combined media prompt issue, trying audio-only fallback:', mediaErr);
          // If camera was declined or unavailable, attempt audio-only so the conversation still works
          try {
            const audioOnlyStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioOnlyStream.getTracks().forEach((t) => t.stop());
            camState = 'denied';
          } catch (audioErr: unknown) {
            setConversationState('error');
            setErrorMessage(
              'Microphone access is required to talk with your AI assistant. Please allow permissions in your browser address bar and try again.'
            );
            return;
          }
        }
      }

      // 2. Set up video stream in preview if camera was granted
      if (userCombinedStream) {
        const videoTracks = userCombinedStream.getVideoTracks();
        if (videoTracks.length > 0) {
          const videoOnlyStream = new MediaStream(videoTracks);
          setCameraStream(videoOnlyStream);
          setCameraStatus('active');
        } else {
          setCameraStatus(camState);
        }
        // Release audio track from test stream so WebRTC client takes clean ownership
        userCombinedStream.getAudioTracks().forEach((t) => t.stop());
      } else {
        setCameraStatus(camState);
      }

      // 3. Call secure backend endpoint to create Tavus CVI conversation
      const response = await fetch('/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setConversationState('error');
        setErrorMessage(data.details || data.error || 'Failed to start avatar session.');
        if (data.missingConfig) setMissingConfig(data.missingConfig);
        return;
      }

      setConversationUrl(data.conversationUrl);
      setConversationId(data.conversationId);
      setConversationState('connecting');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error occurred.';
      setConversationState('error');
      setErrorMessage(msg);
    }
  };

  // Toggle camera stream on/off during or outside call
  const handleToggleCamera = async () => {
    if (cameraStatus === 'active' && cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
      setCameraStream(null);
      setCameraStatus('off');
    } else {
      try {
        setCameraStatus('requesting');
        const newStream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        });
        setCameraStream(newStream);
        setCameraStatus('active');
      } catch (err: unknown) {
        console.warn('Could not start camera:', err);
        setCameraStatus('denied');
      }
    }
  };

  // Standalone combined permission request for the device box
  const handleRequestCombinedMedia = async () => {
    if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) return;
    try {
      setCameraStatus('requesting');
      const combined = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
      });
      const videoTracks = combined.getVideoTracks();
      if (videoTracks.length > 0) {
        setCameraStream(new MediaStream(videoTracks));
        setCameraStatus('active');
      }
    } catch (err: unknown) {
      console.warn('Combined permission request:', err);
      setCameraStatus('denied');
    }
  };

  const handleEndConversation = async () => {
    if (conversationId) {
      try {
        await fetch(`/api/conversation?conversationId=${conversationId}`, { method: 'DELETE' });
      } catch {
        // silent
      }
    }
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
      setCameraStream(null);
      setCameraStatus('off');
    }
    setConversationState('ended');
    setConversationUrl(null);
    setConversationId(null);
    setTimeout(() => setConversationState('idle'), 400);
  };

  const handleReset = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
      setCameraStream(null);
      setCameraStatus('off');
    }
    setConversationState('idle');
    setConversationUrl(null);
    setConversationId(null);
    setErrorMessage(null);
  };

  const isCallActive =
    conversationState === 'connecting' ||
    conversationState === 'connected' ||
    conversationState === 'speaking' ||
    conversationState === 'listening';

  return (
    // NOTE: No <Header>, no <footer> here — main site's layout.tsx already
    // wraps every page with its own Header/Footer. This page only renders
    // the assistant section itself.
    <section className="relative w-full pt-10 sm:pt-14 pb-[7rem]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Simple page intro — shown only before/after a call, not during */}
        {!isCallActive && conversationState !== 'error' && (
          <div className="text-center max-w-2xl mb-2">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-3">
              Meet the AI Avatar<br></br> that talks, sells, and supports 24/7
            </h1>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
              No scripts, no waiting on hold. Just ask, and the Agentix AI avatar walks you through automation workflows, service details, and next steps instantly, like talking to a real person on your team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleStartConversation}
                disabled={conversationState === 'initializing'}
                className="btn-primary disabled:opacity-60"
              >
                {conversationState === 'initializing' ? 'Starting…' : 'Start Conversation'}
              </button>
              <a href="#capabilities" className="btn-ghost">
                See Capabilities
              </a>
            </div>
            {configStatus && !configStatus.isConfigured && (
              <p className="mt-3 text-xs text-red-500">
                Assistant isn&apos;t fully configured yet — check environment variables.
              </p>
            )}
          </div>
        )}

        {/* Active session layout */}
        <div className="w-full space-y-4">
          {/* Status bar — only visible during call */}
          {isCallActive && (
            <AvatarStatus
              conversationState={conversationState}
              micStatus={isMicMuted ? 'muted' : 'active'}
              hasRagKnowledge={configStatus?.hasDocumentIds}
            />
          )}

          {/* Avatar Stage */}
          <AvatarStage
            conversationState={conversationState}
            conversationUrl={conversationUrl}
            conversationId={conversationId}
            errorMessage={errorMessage}
            missingConfig={missingConfig}
            isMicMuted={isMicMuted}
            cameraStream={cameraStream}
            cameraStatus={cameraStatus}
            onToggleCamera={handleToggleCamera}
            onToggleMic={() => setIsMicMuted((p) => !p)}
            onRequestCombinedPermissions={handleRequestCombinedMedia}
            onStateChange={setConversationState}
            onError={(err) => {
              setConversationState('error');
              setErrorMessage(err);
            }}
            onLeave={handleEndConversation}
            onRetry={handleStartConversation}
            onReset={handleReset}
          />

          {/* Session Controls */}
          <DemoControls
            conversationState={conversationState}
            isMicMuted={isMicMuted}
            onToggleMic={() => setIsMicMuted((p) => !p)}
            onStartCall={handleStartConversation}
            onEndCall={handleEndConversation}
          />
        </div>

        <section id="capabilities" className="w-full border-border pt-10 mt-4 scroll-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <Mic2 className="h-4 w-4" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-text mb-2">Live Voice Interaction</h2>
              <p className="text-sm text-textDim leading-relaxed">
                Talks and listens in real time, no typing, no waiting. Just ask, and get an instant spoken response.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-accent2/20 bg-accent2/10 text-accent2">
                <Database className="h-4 w-4" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-text mb-2">Grounded Knowledge (RAG)</h2>
              <p className="text-sm text-textDim leading-relaxed">
                Every answer comes from verified, up-to-date business data, not guesses or made-up information.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <UserRound className="h-4 w-4" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-text mb-2">Photorealistic Digital Human</h2>
              <p className="text-sm text-textDim leading-relaxed">
                A lifelike face and natural expressions make every conversation feel human, not robotic.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-accent2/20 bg-accent2/10 text-accent2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-text mb-2">24/7 Availability</h2>
              <p className="text-sm text-textDim leading-relaxed">
                Always online, always ready, no breaks, no hold music, and no missed queries.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Permission modal */}
      <CameraPermissionModal
        isOpen={isPermissionModalOpen}
        onClose={() => setIsPermissionModalOpen(false)}
        onRequestPermissions={handleStartConversation}
      />
    </section>
  );
}