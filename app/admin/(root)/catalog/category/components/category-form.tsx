import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the schema using Zod
const createCategorySchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" })
    .max(50, { message: "Slug must be at most 50 characters long" }),
  description: z.string().max(5000, { message: "Description must be at most 5000 characters long" }).optional(),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
});

type CreateCategoryFormValues = z.infer<typeof createCategorySchema>;

const CategoryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategorySchema),
  });

  const onSubmit = (data: CreateCategoryFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="slug">Slug</label>
        <input id="slug" {...register("slug")} />
        {errors.slug && <p>{errors.slug.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="isActive">Is Active</label>
        <input type="checkbox" id="isActive" {...register("isActive")} />
      </div>

      <div>
        <label htmlFor="isFeatured">Is Featured</label>
        <input type="checkbox" id="isFeatured" {...register("isFeatured")} />
      </div>

      <button type="submit">Create Category</button>
    </form>
  );
};

export default CategoryForm;
