import { Sharing } from "@/components";
import { DUMMY_BLOG_DATA } from "@/constants";
import { BlogsDetail } from "@/modules/blogsDetail";

export default function DetailPage ({ searchParams }: any) {
    const detail = DUMMY_BLOG_DATA.posts.find((item) => item.id === Number(searchParams.id));
    const cats = DUMMY_BLOG_DATA.categories;
    return <div className="mt-[140px] font-raleway">
        <BlogsDetail detail={detail} cats={cats} />
        <Sharing />
    </div>
}