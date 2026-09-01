"use client";

import { useState } from "react";

export default function ToolLogo({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-bg border border-border rounded-xl flex items-center justify-center p-3.5 hover:border-accent hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
      title={name}
    >
      {failed ? (
        <span className="text-xs font-semibold text-textDim text-center leading-tight">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={`${name} logo`}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}