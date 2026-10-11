"use client";

import { PrinterIcon } from "./icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
    >
      <PrinterIcon />
      Save as PDF
    </button>
  );
}
