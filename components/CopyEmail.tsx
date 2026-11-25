"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { EMAIL } from "@/constants";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard blocked: the address is on screen and selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/30 px-6 py-3.5 font-medium transition-colors hover:border-white"
    >
      {copied ? (
        <Check size={18} aria-hidden />
      ) : (
        <Copy size={18} aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}
