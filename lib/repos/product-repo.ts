import { Product } from "@/lib/models";

const getList = async (variant?: string, category?: string) => {
  console.log("variant", variant);
  console.log("category", category);
  const p: Product[] = [];
  return p;
};

export { getList };
