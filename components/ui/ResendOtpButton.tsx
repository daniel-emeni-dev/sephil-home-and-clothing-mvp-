"use client";

type ResendOtpButtonProps = {
  canResend: boolean;
  onResend: () => void;
};

export function ResendOtpButton({
  canResend,
  onResend,
}: ResendOtpButtonProps) {
  if (!canResend) {
    return null;
  }

  return (
    <div
      className="
        mt-6
        text-center
      "
    >
      <p
        className="
          text-sm
          text-text-secondary
        "
      >
        Didn't receive the code?
      </p>

      <button
        type="button"
        onClick={onResend}
        className="
          mt-2
          font-medium
          text-primary
          transition-colors
          duration-200
          hover:opacity-80
          focus:outline-none
          focus:underline
        "
      >
        Resend Code
      </button>
    </div>
  );
}