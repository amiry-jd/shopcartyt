import { Category, DefaultCategory } from "@/lib/models";
import { createCategoryPayload, createCategorySchema, updateCategorySchema } from "@/lib/models/admin/catalog/category";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const CategoryForm: React.FC = ({
  type,
  category,
  categoryId,
}: {
  type: "Create" | "Update";
  category?: Category;
  categoryId?: number;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createCategoryPayload>({
    resolver: type === "Update" ? zodResolver(updateCategorySchema) : zodResolver(createCategorySchema),
    defaultValues: category && type === "Update" ? category : DefaultCategory,
  });

  const onSubmit = (data: createCategoryPayload) => {
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
