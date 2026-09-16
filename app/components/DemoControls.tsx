'use client';

import React from 'react';
import { ConversationState } from '@/app/types';

interface DemoControlsProps {
  conversationState: ConversationState;
  isMicMuted: boolean;
  onToggleMic: () => void;
  onStartCall: () => void;
  onEndCall: () => void;
}

const agentImages = [
  {
    src: '/images/ChatGPT Image Sep 16, 2026, 01_14_15 PM.png',
    alt: 'AI agent in a modern office',
  },
  {
    src: '/images/ChatGPT Image Sep 16, 2026, 01_11_55 PM.png',
    alt: 'AI agent in a modern office',
  },
  {
    src: '/images/ChatGPT Image Sep 16, 2026, 01_07_28 PM.png',
    alt: 'AI agent in a modern office',
  },
  { src: '/images/ee85c71d-0cc8-4274-a8a8-41dd15cf17fe.png', alt: 'AI agent' },
  { src: '/images/ebdd4d9e-a685-42aa-99a4-04e406939c21.png', alt: 'AI agent' },
  { src: '/images/aed1a569-4aa4-4516-a613-c201ebef2e5a.png', alt: 'AI agent' },
];

export const DemoControls: React.FC<DemoControlsProps> = ({
  conversationState,
  isMicMuted,
  onToggleMic,
  onStartCall,
  onEndCall,
}) => {
  const isCallActive =
    conversationState === 'connecting' ||
    conversationState === 'connected' ||
    conversationState === 'speaking' ||
    conversationState === 'listening';

  const isLoading =
    conversationState === 'initializing' || conversationState === 'requesting-permissions';

  return (
    <div className="w-full space-y-4 pt-14">
      {/* Session Controls bar */}
      {/* <div className="card-glow rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-ink tracking-tight">Session Controls</div>
          <div className="text-[11px] text-ink-muted mt-0.5">
            {isCallActive ? 'Live conversation in progress' : 'Avatar ready to connect'}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {isCallActive ? (
            <>
              <Button
                variant={isMicMuted ? 'danger' : 'outline'}
                size="md"
                onClick={onToggleMic}
                leftIcon={isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              >
                {isMicMuted ? 'Unmute' : 'Mute'}
              </Button>
              <Button
                variant="danger"
                size="md"
                onClick={onEndCall}
                leftIcon={<PhoneOff className="w-4 h-4" />}
              >
                End Call
              </Button>
            </>
          ) : (
            <Button
              variant="neon"
              size="md"
              onClick={onStartCall}
              isLoading={isLoading}
              leftIcon={<PhoneCall className="w-4 h-4" />}
              className="uppercase tracking-wider"
            >
              Start Conversation
            </Button>
          )}
        </div>
      </div> */}

      <div className="agent-images" aria-label="Available AI agents">
        <div className="agent-images__track">
          {[...agentImages, ...agentImages].map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              aria-hidden={index >= agentImages.length}
              className="agent-images__item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
