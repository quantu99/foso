"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { CSCaretDownSolid } from "../iconography";
import Link from "next/link";
interface MenuType {
  value: string;
  label: string;
}
export function TopBar() {
  const MENU_OPTIONS = [
    {
      value: "about",
      label: "Về Chúng Tôi",
    },
    {
      value: "solution",
      label: "Giải pháp",
    },
    {
      value: "resource",
      label: "Tài nguyên",
    },
    {
      value: "contact",
      label: "Liên hệ",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("about");
  return (
    <div className="font-raleway mx-auto my-4 flex items-center justify-between px-8 py-3 lg:max-w-[1280px]">
      <Link href="/" className="h-auto w-[134px]">
        <Image
          alt="logo"
          src={logo}
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex items-center gap-2">
        {MENU_OPTIONS.map((item: MenuType, index: number) => (
          <div
            onClick={() => setSelectedOption(item.value)}
            role="button"
            className="flex items-center gap-2 px-2"
            key={index}
          >
            <div className="relative">
              <span
                className={`${item.value === selectedOption ? "font-bold" : "font-medium"} whitespace-nowrap text-[13px] lg:text-sm`}
              >
                {item.label}
              </span>
              {item.value === selectedOption && (
                <div className="bg-green-12 absolute -bottom-3 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-[50%]" />
              )}
            </div>
            {item.value === "solution" || item.value === "resource" ? (
              <CSCaretDownSolid />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {/* <div className="py-2 px-3 h-10 rounded-[50%] border border-gray-500">
          <Star />
        </div> */}
        <div
          role="button"
          className="bg-foso-custom-gradient flex h-10 items-center gap-2 rounded-[50px] px-3 py-2 text-sm font-bold"
        >
          Trở thành khách hàng
          <div className="bg-black-0 flex h-[22px] w-[22px] items-center justify-center rounded-[50%] p-1">
            <ArrowUpRight className="h-[14px] w-[14px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
