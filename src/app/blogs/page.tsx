import { BlogProps, DUMMY_BLOG_DATA } from "@/constants";
import { BlogsMain } from "@/modules";
import Image from "next/image";
import note from "@/assets/images/note.png";
import hand from "@/assets/images/hand.png";

export default function BlogsPage() {
  const categories = DUMMY_BLOG_DATA.categories;
  const allBlogs = DUMMY_BLOG_DATA.posts;
  return (
    <div className="mt-[60px] font-raleway relative">
      <BlogsMain title="Tất cả bài viết" cats={categories} blogs={allBlogs} />
      <div className="absolute top-[200px] hidden lg:block left-[100px] w-[200px] lg:w-[282px]">
        <Image src={note} className="w-full h-full object-cover" alt="image-thumb-1" />
      </div>
      <div className="absolute top-[200px] hidden lg:block right-[100px] w-[200px] lg:w-[282px]">
        <Image src={hand} className="w-full h-full object-cover" alt="image-thumb-2" />
      </div>
    </div>
  );
}
