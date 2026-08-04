import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AccountDivider } from "./AccountDivider";

export function AccountSocialLogin() {
  return (
    <div className="space-y-4">
      <button
        type="button"
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-border
          bg-surface
          px-4
          py-3
          text-sm
          font-medium
          text-text-primary
          transition-all
          duration-200
          hover:bg-surface-secondary
        "
      >
        <FcGoogle size={20} />

        Continue with Google
      </button>

      <button
        type="button"
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-border
          bg-surface
          px-4
          py-3
          text-sm
          font-medium
          text-text-primary
          transition-all
          duration-200
          hover:bg-surface-secondary
        "
      >
        <FaApple
          size={20}
          className="text-black"
        />

        Continue with Apple
      </button>
        
      </div>
  );
}