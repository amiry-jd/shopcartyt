import { Category } from "@/lib/models";

const getCategories = async (limit: number): Promise<Category[]> => {
  console.log("Fetching categories", limit);
  const c: Category[] = [];
  return c;
};

export { getCategories };
