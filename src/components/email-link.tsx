"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const EMAIL = "henry.lee746@gmail.com";

export function EmailLink() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    let copiedToClipboard = false;

    try {
      await navigator.clipboard.writeText(EMAIL);
      copiedToClipboard = true;
    } catch {
      const input = document.createElement("textarea");
      input.value = EMAIL;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      copiedToClipboard = document.execCommand("copy");
      document.body.removeChild(input);
    }

    if (!copiedToClipboard) return;

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={
        copied ? `Copied ${EMAIL}` : `Copy email address ${EMAIL}`
      }
      title={EMAIL}
      className="inline-flex items-center gap-2 rounded-sm cursor-pointer text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <FaEnvelope className="text-2xl" />
      <span className="text-[13px] text-muted-foreground">
        {copied ? "Copied" : EMAIL}
      </span>
    </button>
  );
}
