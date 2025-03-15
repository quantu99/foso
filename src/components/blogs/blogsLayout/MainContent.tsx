import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import banner from "@/assets/images/top-banner.png";
import blogImage from "@/assets/images/dummy-image.png";
import { Badge } from "@/components/ui";
import {
  CSArrowRightSolid,
  CSCalenderOutline,
  CSClockOutline,
} from "@/components/iconography";
import { format } from "date-fns";
import Link from "next/link";
import { getLinkDetailBlog } from "@/helpers";
export function MainContent({ blogs, cats }: any) {
  return (
    <div>
      <span className="text-4xl font-extrabold leading-[200%] text-black-2">
        Tất cả bài viết
      </span>
      <div className="relative mb-12 mt-6 flex h-[312px] w-full items-center rounded-[40px] bg-blue-linear pl-10">
        <div className="flex w-1/2 flex-col gap-8">
          <h2 className="text-4xl font-bold text-white">
            Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
          </h2>
          <div
            role="button"
            className="flex w-[216px] items-center justify-center gap-8 rounded-[40px] border-[2px] border-white px-6 py-2 text-white"
          >
            <span>Tham gia ngay</span>
            <ArrowUpRight className="h-[22px] w-[22px] text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={banner}
            alt="banner"
            width={470}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {blogs.map((item: any, index: number) => (
          <ContentCard key={index} item={item} cats={cats} />
        ))}
      </div>
    </div>
  );
}
function ContentCard({ item, cats }: any) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-t-[24px]">
      <Link
        href={getLinkDetailBlog(
          cats.find((c: any) => c.id === item.categoryId)?.slug,
          item.slug,
          item.id,
        )}
        className="h-[475px] w-full"
      >
        <Image
          src={blogImage}
          alt="blog-image"
          className="h-full w-full rounded-t-[24px] object-cover"
        />
      </Link>
      <div className="flex flex-col gap-4">
        <Badge title={cats.find((c: any) => c.id === item.categoryId)?.name} />
        <Link
          href={getLinkDetailBlog(
            cats.find((c: any) => c.id === item.categoryId)?.slug,
            item.slug,
            item.id,
          )}
          className="line-clamp-2 text-2xl font-extrabold leading-[150%]"
        >
          {item.excerpt}
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CSCalenderOutline />
            <span className="text-grey-0 text-base font-medium leading-[150%]">
              {format(item.createdAt, "dd-MM-yyyy")}
            </span>
          </div>
          |
          <div className="flex items-center gap-2">
            <CSClockOutline />
            <span className="text-grey-0 text-base font-medium leading-[150%]">
              {item.commentCount} phút đọc
            </span>
          </div>
        </div>
        <div role="button" className="flex items-center gap-4">
          <Link
            href={getLinkDetailBlog(
              cats.find((c: any) => c.id === item.categoryId)?.slug,
              item.slug,
              item.id,
            )}
            className="text-lg font-semibold leading-[150%]"
          >
            Khám phá thêm
          </Link>
          <CSArrowRightSolid />
        </div>
      </div>
    </div>
  );
}
