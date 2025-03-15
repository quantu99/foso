import Image from "next/image";
import { Badge } from "../ui";
import avatar from "@/assets/images/avatar.png";
import { CSCalenderOutline, CSClockOutline } from "../iconography";
import { format } from "date-fns";
export function MainContent({ cat, detail }: any) {
  console.log(detail);
  return (
    <div className="flex flex-col gap-6 lg:w-[924px]">
      <div className="flex flex-col gap-4">
        <Badge title={cat} />
        <h1 className="text-4xl font-extrabold leading-[100%] text-black-0">
          {detail.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] border border-[#F1F5F7] bg-white">
              <Image
                src={avatar}
                alt="avatar"
                className="h-8 w-8 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-grey-0 text-sm font-medium leading-[150%]">
                Tác giả
              </span>
              <span className="text-black-3 text-base font-bold leading-[150%]">
                {detail.author.name}
              </span>
            </div>
          </div>
          <div className="text-grey-0 flex items-center gap-6 text-base font-medium leading-[150%]">
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
    </div>
  );
}
