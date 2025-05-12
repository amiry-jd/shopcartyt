import { createCategoryPayload } from "@/lib/models/admin/catalog/category";
import { console } from "inspector";

export async function createCategory(payload: createCategoryPayload) {
  console.log("createCategory payload", payload);
  return payload;
}
