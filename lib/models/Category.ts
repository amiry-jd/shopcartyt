import { Product } from "./Product";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  isActive: boolean;
  isFeatured: boolean;
  parentId: number | null | undefined;
  parent: Category | null | undefined;
  children: Category[];
  products: Product[];
  productsCount: number;
  createdAt: Date;
  updatedAt: Date;
}
