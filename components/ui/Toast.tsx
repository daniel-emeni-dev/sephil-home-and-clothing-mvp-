"use client";

type ToastVariant =
  | "success"
  | "error"
  | "info"
  | "warning";

type ToastProps = {
  message: string;
  variant?: ToastVariant;
};

export function Toast({
  message,
  variant = "info",
}: ToastProps) {
  const variants = {
    success:
      "bg-success-light text-success border-success",

    error:
      "bg-error-light text-error border-error",

    info:
      "bg-info-light text-info border-info",

    warning:
      "bg-warning-light text-warning border-warning",
  };

  return (
    <div
      className={`
        fixed
        bottom-6
        right-6
        z-50
        rounded-xl
        border
        px-4
        py-3
        text-sm
        font-medium
        shadow-sm
        ${variants[variant]}
      `}
    >
      {message}
    </div>
  );
}