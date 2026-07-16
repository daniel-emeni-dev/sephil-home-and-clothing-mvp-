"use client";

import {
  useEffect,
  useRef,
} from "react";

type OtpInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export function OtpInput({
  value,
  onChange,
}: OtpInputProps) {
  const inputsRef = useRef<
    Array<HTMLInputElement | null>
  >([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(
      0,
      6
    );
  }, []);

  function updateDigit(
    index: number,
    digit: string
  ) {
    const nextValue = [...value];
    nextValue[index] = digit;

    onChange(nextValue);
  }

  function handleChange(
    index: number,
    raw: string
  ) {
    const digit = raw.replace(/\D/g, "").slice(-1);

    updateDigit(index, digit);

    if (
      digit &&
      index < inputsRef.current.length - 1
    ) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (
      event.key === "Backspace" &&
      !value[index] &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowLeft" &&
      index > 0
    ) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < inputsRef.current.length - 1
    ) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handlePaste(
    event: React.ClipboardEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) {
      return;
    }

    const nextValue = Array(6)
      .fill("")
      .map((_, index) => pasted[index] ?? "");

    onChange(nextValue);

    const lastFilledIndex = Math.min(
      pasted.length - 1,
      5
    );

    if (lastFilledIndex >= 0) {
      inputsRef.current[lastFilledIndex]?.focus();
    }
  }

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-3"
      onPaste={handlePaste}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputsRef.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          value={value[index] ?? ""}
          onChange={(event) =>
            handleChange(
              index,
              event.target.value
            )
          }
          onKeyDown={(event) =>
            handleKeyDown(index, event)
          }
          className="
            h-12
            w-12
            rounded-xl
            border
            border-border
            bg-surface
            text-center
            text-lg
            font-semibold
            text-text-primary
            outline-none
            transition-colors
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            sm:h-14
            sm:w-14
            sm:text-xl
          "
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}