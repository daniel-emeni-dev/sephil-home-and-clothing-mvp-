import { Container } from "@/components/ui/Container";
import { OrderDetailsClient } from "@/components/account/OrderDetailsClient";

type AccountOrderDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AccountOrderDetailsPage({
  params,
}: AccountOrderDetailsPageProps) {
  const { id } = await params;

  return (
    <Container>
      <div className="py-10 lg:py-14">
        <OrderDetailsClient id={id} />
      </div>
    </Container>
  );
}