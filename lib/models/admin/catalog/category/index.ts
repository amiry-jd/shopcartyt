import { z } from "zod";

export const createCategorySchema = z.object({
  // parentId: string | null;
  // parent: Category | null;
  parentId: z.number().optional().nullable(),

  // name: string;
  name: z
    .string()
    .min(3, {
      message: "Name must contain at least 3 character(s)",
    })
    .max(50, {
      message: "Name must contain at most 50 character(s)",
    }),

  // slug: string;
  slug: z
    .string()
    .min(3, {
      message: "Slug must contain at least 3 character(s)",
    })
    .max(50, {
      message: "Slug must contain at most 50 character(s)",
    }),

  // description: string;
  description: z
    .string()
    .max(5000, {
      message: "Description must contain at most 5000 character(s)",
    })
    .optional(),

  // isActive: boolean;
  isActive: z.boolean().default(true),

  // isFeatured: boolean;
  isFeatured: z.boolean().default(false),

  // image: string;
  image: z.string(),
});

export const updateCategorySchema = createCategorySchema.extend({
  id: z.number(),
});

export type createCategoryPayload = z.infer<typeof createCategorySchema>;
export type updateCategoryPayload = z.infer<typeof updateCategorySchema>;
