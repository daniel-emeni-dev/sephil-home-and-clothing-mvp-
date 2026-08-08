import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  message?: string;
  className?: string;
};

export function WhatsAppButton({
  message = "Hello Sephil, I'd like to ask a question about your products.",
  className = "",
}: WhatsAppButtonProps) {
  const phoneNumber = "YOUR_WHATSAPP_NUMBER";

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#25D366]
        px-5
        py-3
        text-sm
        font-medium
        text-white
        transition-opacity
        hover:opacity-90
        ${className}
      `}
    >
      <MessageCircle size={18} strokeWidth={1.8} />
      Chat on WhatsApp
    </a>
  );
}