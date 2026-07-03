export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured: boolean;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Leather Handbag",
    category: "Fashion",
    price: 48500,
    image: "/images/products/handbag.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Luxury Sneakers",
    category: "Shoes",
    price: 39500,
    image: "/images/products/sneakers.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Decorative Ceramic Vase",
    category: "Home Essentials",
    price: 18500,
    image: "/images/products/vase.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Minimal Gold Wristwatch",
    category: "Accessories",
    price: 62500,
    image: "/images/products/watch.jpg",
    featured: true,
  },
  {
    id: 5,
    name: "Luxury Body Lotion",
    category: "Beauty",
    price: 12500,
    image: "/images/products/lotion.jpg",
    featured: true,
  },
  {
    id: 6,
    name: "Premium Throw Pillow",
    category: "Home Essentials",
    price: 14500,
    image: "/images/products/pillow.jpg",
    featured: true,
  },
  {
    id: 7,
    name: "Classic Women's Sandals",
    category: "Shoes",
    price: 25500,
    image: "/images/products/sandals.jpg",
    featured: true,
  },
  {
    id: 8,
    name: "Signature Perfume",
    category: "Beauty",
    price: 29500,
    image: "/images/products/perfume.jpg",
    featured: true,
  },
];