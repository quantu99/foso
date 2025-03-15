"use client";
import Image from "next/image";
import { Badge } from "../ui";
import avatar from "@/assets/images/avatar.png";
import blogImage from "@/assets/images/dummy-image.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import {
  CSAmazingSolid,
  CSAngrySolid,
  CSArrowRightSolid,
  CSBoredSolid,
  CSCalenderOutline,
  CSClockOutline,
  CSHeartSolid,
  CSLikeSolid,
  CSSurpriseSolid,
} from "../iconography";
import { format } from "date-fns";
import thumb from "@/assets/images/dummy-image.png";
import Link from "next/link";
import { getLinkDetailBlog } from "@/helpers";
import { DUMMY_BLOG_DATA } from "@/constants";

export function MainContent({ cat, detail, exactCatType }: any) {
  const relateBlogs = DUMMY_BLOG_DATA.posts.filter(
    (item: any) => item.categoryId === detail.categoryId,
  );

  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    setSwiperKey((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:w-[924px]">
      <div className="flex flex-col gap-4">
        <Badge type={exactCatType} title={cat} />
        <h1 className="text-4xl font-extrabold leading-[100%] text-black-0">
          {detail.title}
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-[#F1F5F7] bg-white">
              <Image
                src={avatar}
                alt="avatar"
                className="h-8 w-8 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-[150%] text-grey-0">
                Tác giả
              </span>
              <span className="text-base font-bold leading-[150%] text-black-3">
                {detail.author.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-base font-medium leading-[150%] text-grey-0">
            <div className="flex items-center gap-2">
              <CSCalenderOutline />
              <span>
                Cập nhật vào: {format(detail.updatedAt, "dd-MM-yyyy")}
              </span>
            </div>
            |
            <div className="flex items-center gap-2">
              <CSClockOutline />
              <span>{detail.commentCount} phút đọc</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full">
          <Image
            src={thumb}
            alt={`thumbnail-${detail.slug}`}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-base font-normal leading-[150%] text-grey-0">
          Quy trình 5s là gì?
        </span>
      </div>
      <div
        className="article-content-html"
        dangerouslySetInnerHTML={{ __html: detail.content }}
      />
      <div className="shadow-reactionBox mx-auto flex w-full max-w-[900px] flex-col items-center rounded-3xl py-6 md:w-[900px]">
        <span className="text-xl font-extrabold leading-[150%] text-black-3">
          Bạn thấy bài viết như thế nào?
        </span>
        <span className="mb-6 mt-1 text-base font-medium leading-[150%] text-black-3">
          {detail.commentCount} phản hồi
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8">
          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSLikeSolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
              className="text-base font-bold leading-[150%] text-[#10805B]"
            >
              1
            </motion.span>
            <span className="text-sm font-medium leading-[150%] text-black-0">
              Hữu ích
            </span>
          </motion.div>

          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSHeartSolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
            >
              2
            </motion.span>
            <span>Yêu thích</span>
          </motion.div>

          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSAmazingSolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
            >
              0
            </motion.span>
            <span>Thú vị</span>
          </motion.div>

          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSSurpriseSolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
            >
              1
            </motion.span>
            <span>Bất ngờ</span>
          </motion.div>

          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSBoredSolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
            >
              0
            </motion.span>
            <span className="whitespace-nowrap">Nhàm chán</span>
          </motion.div>

          <motion.div
            role="button"
            className="flex w-[85px] flex-col items-center gap-1 rounded border border-[#10805B] p-2 sm:w-[90px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(16, 128, 91, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CSAngrySolid />
            </motion.div>
            <motion.span
              whileHover={{ color: "#10805B" }}
              transition={{ duration: 0.2 }}
            >
              0
            </motion.span>
            <span>Tức giận</span>
          </motion.div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <span className="text-3xl font-extrabold leading-[150%] text-black-0 sm:text-4xl sm:leading-[200%]">
          Bài viết liên quan
        </span>
        <div className="relative px-4 md:px-8 lg:px-0">
          <Swiper
            key={swiperKey}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
              },
            }}
          >
            {relateBlogs.map((item: any, idx: number) => (
              <SwiperSlide key={idx} className="pb-12">
                <RelateBlogs item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination dots */}
          <div className="mt-4 flex justify-center">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelateBlogs({ item }: any) {
  const cats = DUMMY_BLOG_DATA.categories;
  return (
    <div className="flex w-full flex-col gap-4 rounded-[24px]">
      <Link
        href={getLinkDetailBlog(
          cats.find((c: any) => c.id === item.categoryId)?.slug,
          item.slug,
          item.id,
        )}
        className="aspect-[4/3] w-full overflow-hidden rounded-[24px]"
      >
        <Image
          src={blogImage}
          alt="blog-image"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-3">
        <Badge
          type={cats.find((c: any) => c.id === item.categoryId)?.type}
          title={cats.find((c: any) => c.id === item.categoryId)?.name}
        />
        <Link
          href={getLinkDetailBlog(
            cats.find((c: any) => c.id === item.categoryId)?.slug,
            item.slug,
            item.id,
          )}
          className="line-clamp-2 text-xl font-extrabold leading-[140%] sm:text-2xl sm:leading-[150%]"
        >
          {item.excerpt}
        </Link>
        <div className="flex items-center gap-2 text-sm sm:gap-3 sm:text-base">
          <div className="flex items-center gap-1 sm:gap-2">
            <CSCalenderOutline />
            <span className="font-medium leading-[150%] text-grey-0">
              {format(item.createdAt, "dd-MM-yyyy")}
            </span>
          </div>
          |
          <div className="flex items-center gap-1 sm:gap-2">
            <CSClockOutline />
            <span className="font-medium leading-[150%] text-grey-0">
              {item.commentCount} phút đọc
            </span>
          </div>
        </div>
        <div role="button" className="flex items-center gap-2 sm:gap-4">
          <Link
            href={getLinkDetailBlog(
              cats.find((c: any) => c.id === item.categoryId)?.slug,
              item.slug,
              item.id,
            )}
            className="text-base font-semibold leading-[150%] sm:text-lg"
          >
            Khám phá thêm
          </Link>
          <CSArrowRightSolid />
        </div>
      </div>
    </div>
  );
}
