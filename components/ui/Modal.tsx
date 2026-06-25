"use client";

import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/30
        px-4
      "
      onClick={onClose}
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          border
          border-border
          bg-surface
          p-6
          shadow-sm
        "
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2
            className="
              mb-4
              text-xl
              font-semibold
              text-text-primary
            "
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
}