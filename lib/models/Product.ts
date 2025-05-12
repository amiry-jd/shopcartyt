import { Brand } from "./Brand";
import { Category } from "./Category";

export interface Product {
  discount: number | undefined;
  status: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  brandId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isFeatured: boolean;
  stock: number;
  brand: Brand;
  Categories: Category[];
  reviews: Review[];
  ratings: Rating[];
  images: Image[];
  videos: Video[];
  tags: Tag[];
  specifications: Specification[];
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Rating {
  id: string;
}

export interface Image {
  id: string;
  getUrl: () => string;
}

export interface Video {
  id: string;
}

export interface Tag {
  id: string;
}

export interface Specification {
  id: string;
}
