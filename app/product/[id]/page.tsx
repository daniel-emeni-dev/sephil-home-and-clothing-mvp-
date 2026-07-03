import { notFound } from "next/navigation";

import {
    getProductById,
    getProductsByCategory,
} from "@/lib/data/products";

import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({
    params,
}: Props) {
    const { id } = await params;

    const product = getProductById(Number(id));

    if (!product) {
        notFound();
    }

    const relatedProducts = getProductsByCategory(
        product.category
    )
        .filter((item) => item.id !== product.id)
        .slice(0, 4);
    return (
        <main className="bg-background">
            <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
                <div
                    className="
            grid
            gap-12
            lg:grid-cols-2
          "
                >
                    <ProductImageGallery product={product} />

                    <ProductInfo product={product} />
                </div>

                <RelatedProducts
                    products={relatedProducts}
                />
            </section>
        </main>
    );
}