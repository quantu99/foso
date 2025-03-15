import Link from "next/link";
import {
  CSFacebookSolid,
  CSLinSolid,
  CSRobotSolid,
  CSXSolid,
  CSZaloSolid,
} from "../iconography";

export function Sharing() {
  return (
    <div className="hidden fixed left-[100px] top-[320px] lg:flex w-[56px] flex-col gap-2 py-3">
      <span className="text-base font-extrabold leading-[150%] text-black-3">
        Chia sẻ
      </span>
      <Link
        href="https://chat.zalo.me/"
        className="flex items-center justify-center rounded-2xl border border-[#15AA7A] p-3"
      >
        <CSZaloSolid />
      </Link>
      <Link
        href="https://www.facebook.com/"
        className="flex items-center justify-center rounded-2xl border border-[#15AA7A] p-3"
      >
        <CSFacebookSolid />
      </Link>
      <Link
        href="https://www.linkedin.com/"
        className="flex items-center justify-center rounded-2xl border border-[#15AA7A] p-3"
      >
        <CSLinSolid />
      </Link>
      <Link
        href="https://x.com/?lang=vi"
        className="flex items-center justify-center rounded-2xl border border-[#15AA7A] p-3"
      >
        <CSXSolid />
      </Link>
      <Link
        href="https://discord.com/"
        className="flex items-center justify-center rounded-2xl border border-[#15AA7A] p-3"
      >
        <CSRobotSolid />
      </Link>
    </div>
  );
}
