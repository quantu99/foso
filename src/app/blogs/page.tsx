import { BlogProps, DUMMY_BLOG_DATA } from "@/constants";
import { BlogsMain } from "@/modules";

export default function BlogsPage() {
  const categories = DUMMY_BLOG_DATA.categories;
  const allBlogs = DUMMY_BLOG_DATA.posts;
  return (
    <div className="font-raleway">
      <BlogsMain cats={categories} blogs={allBlogs} />
    </div>
  );
}
