"use client";
import { CSGlassSolid } from "@/components/iconography";
import banner from "@/assets/images/banner.png";
import banner1 from "@/assets/images/banner1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { getLinkCategory } from "@/helpers";
export function RightBar({ cats, onSearch }: any) {
  return (
    <div className="flex flex-col gap-8">
      <Searchable onSearch={onSearch} />
      <CatList cats={cats} />
      <div role="button" className="w-full">
        <Image
          alt="banner-adv"
          src={banner}
          className="h-full w-full object-cover"
        />
      </div>
      <div role="button" className="w-full">
        <Image
          alt="banner-adv"
          src={banner1}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
function Searchable({ onSearch }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <span className="text-2xl font-extrabold leading-[200%] text-black-0">
        Tìm kiếm
      </span>
      <div className="flex items-center gap-2 rounded-xl py-3 pl-6 pr-2 shadow-randomCompanyLogo">
      <input
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Tìm kiếm bài viết"
          className="placeholder:text-grey-1 caret-grey-1 h-full w-[90%] bg-transparent text-base outline-none placeholder:font-medium placeholder:leading-[150%]"
        />
        <div
          role="button"
          className="bg-green-13 flex h-12 w-12 items-center justify-center rounded-xl"
        >
          <CSGlassSolid />
        </div>
      </div>
    </div>
  );
}
function CatList({ cats }: any) {
  return (
    <div className="flex w-full flex-col gap-6">
      <span className="text-2xl font-extrabold leading-[200%] text-black-0">
        Danh mục bài viết
      </span>
      <ul className="flex w-full flex-col gap-4">
        {cats.map((item: any) => (
          <Link href={getLinkCategory(item.slug)} role="button" className="flex w-full items-center justify-between">
            <span className="text-black-3 text-lg font-medium leading-[150%]">
              {item.name}
            </span>
            <span className="text-grey-0 text-lg font-medium leading-[150%]">
              {item.postsCount}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
