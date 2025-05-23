import Author from "./Author";
import BlogCategory from "./BlogCategory";

export default interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: Author;
  categories: string[];
  mainImage: string;
  publishedAt: string;
  isLatest: boolean;
  createdAt: string;
  updatedAt: string;
  Categories: BlogCategory[];
}
