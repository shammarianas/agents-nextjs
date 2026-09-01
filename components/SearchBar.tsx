"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setValue(next);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (next) {
        params.set("q", next);
      } else {
        params.delete("q");
      }
      const query = params.toString();
      router.push(`/products${query ? `?${query}` : ""}`);
    }, 250);
  }

  return (
    <div className="flex-1 max-w-[420px] relative">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textDim pointer-events-none"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search agents…"
        aria-label="Search agents"
        className="w-full bg-surface border border-border text-text placeholder:text-textDim rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-accent transition"
      />
    </div>
  );
}