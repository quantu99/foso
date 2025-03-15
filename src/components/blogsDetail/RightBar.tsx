import { MenuBar } from "./MenuBar";
import banner from "@/assets/images/banner.png";
import banner1 from "@/assets/images/banner1.png";
import Image from "next/image";
export function RightBar({ tableOfContents }: any) {
  return (
    <div className="flex-1  flex-col gap-6 hidden px-4 lg:px-0 lg:flex">
      <MenuBar tableOfContents={tableOfContents} />
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
