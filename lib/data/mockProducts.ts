export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured: boolean;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Leather Handbag",
    category: "Fashion",
    price: 48500,
    image: "/images/products/handbag.jpg",
    featured: true,
    description:
      "Crafted from premium leather with a timeless silhouette, this handbag is designed for everyday elegance and lasting durability.",
  },
  {
    id: 2,
    name: "Luxury Sneakers",
    category: "Shoes",
    price: 39500,
    image: "/images/products/sneakers.jpg",
    featured: true,
    description:
      "Comfort meets modern style with these premium sneakers, perfect for casual outings and everyday wear.",
  },
  {
    id: 3,
    name: "Decorative Ceramic Vase",
    category: "Home Essentials",
    price: 18500,
    image: "/images/products/vase.jpg",
    featured: true,
    description:
      "A beautifully handcrafted ceramic vase that adds warmth and elegance to any living space.",
  },
  {
    id: 4,
    name: "Minimal Gold Wristwatch",
    category: "Accessories",
    price: 62500,
    image: "/images/products/watch.jpg",
    featured: true,
    description:
      "A refined gold wristwatch with a minimalist design, suitable for both formal occasions and daily wear.",
  },
  {
    id: 5,
    name: "Luxury Body Lotion",
    category: "Beauty",
    price: 12500,
    image: "/images/products/lotion.jpg",
    featured: true,
    description:
      "Richly moisturizing body lotion formulated to nourish the skin while leaving a soft, refreshing fragrance.",
  },
  {
    id: 6,
    name: "Premium Throw Pillow",
    category: "Home Essentials",
    price: 14500,
    image: "/images/products/pillow.jpg",
    featured: true,
    description:
      "Soft, stylish, and comfortable, this throw pillow adds a cozy boutique touch to your home décor.",
  },
  {
    id: 7,
    name: "Classic Women's Sandals",
    category: "Shoes",
    price: 25500,
    image: "/images/products/sandals.jpg",
    featured: true,
    description:
      "Elegant women's sandals designed with comfort and versatility, making them perfect for everyday outings.",
  },
  {
    id: 8,
    name: "Signature Perfume",
    category: "Beauty",
    price: 29500,
    image: "/images/products/perfume.jpg",
    featured: true,
    description:
      "A sophisticated fragrance with floral and woody notes that leaves a lasting impression throughout the day.",
  },
];