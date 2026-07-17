import { Container } from "@/components/ui/Container";
import { OrderConfirmationClient } from "@/components/order-confirmation/OrderConfirmationClient";

type OrderConfirmationPageProps = {
  searchParams: Promise<{
    order?: string;
  }>;
};

export default async function OrderConfirmationPage({
  searchParams,
}: OrderConfirmationPageProps) {
  const { order } = await searchParams;

  return (
    <Container>
      <div className="py-8 lg:py-12">
        <OrderConfirmationClient
          orderId={order}
        />
      </div>
    </Container>
  );
}