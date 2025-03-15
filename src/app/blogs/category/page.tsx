import { DUMMY_BLOG_DATA } from "@/constants";
import { BlogsMain } from "@/modules";

export default function CategoryPage({ searchParams }: any) {
  const catDetail = DUMMY_BLOG_DATA.categories.find(
    (item: any) => item.slug === searchParams.slug,
  );
  const catBlogs = DUMMY_BLOG_DATA.posts.filter(
    (item) => item.categoryId === catDetail?.id,
  );
  return (
    <div className="mt-[60px] font-raleway">
      <BlogsMain
        title={catDetail?.name}
        cats={DUMMY_BLOG_DATA.categories}
        blogs={catBlogs}
      />
    </div>
  );
}
