import { DUMMY_BLOG_DATA } from "@/constants";
import { BlogsDetail } from "@/modules/blogsDetail";

export default function DetailPage ({ searchParams }: any) {
    const detail = DUMMY_BLOG_DATA.posts.find((item) => item.id === Number(searchParams.id));
    const cats = DUMMY_BLOG_DATA.categories;
    return <div>
        <BlogsDetail detail={detail} cats={cats} />
    </div>
}