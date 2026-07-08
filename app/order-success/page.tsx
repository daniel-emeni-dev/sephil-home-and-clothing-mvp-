import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function OrderSuccessPage() {
  return (
    <Container>
      <div
        className="
          flex
          min-h-[85vh]
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div className="h-16 w-16 text-green-500 mb-8"><CheckCircle2
  className="
    h-16
    w-16
    text-green-500
    mb-6
  "
/></div>

<h1
  className="
    text-4xl
    font-bold
    text-text-primary
  "
>
  Order Placed Successfully
</h1>

        <p
          className="
            mt-4
            max-w-md
            text-text-secondary
          "
        >
          Your order has been received successfully. Our team will contact you
          shortly with your bank transfer details to complete payment.
        </p>

        <Link href="/shop" className="mt-8">
          <Button className="px-8 py-3">
    Continue Shopping
</Button>
        </Link>
      </div>
    </Container>
  );
}
