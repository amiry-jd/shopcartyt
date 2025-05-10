import { Product } from "./Product";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isFeatured: boolean;
  parentId: string | null;
  parent: Category | null;
  children: Category[];
  products: Product[];
}
