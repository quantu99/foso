import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadCrumbTitle {
  catTitle?: string;
  optionTitle?: string;
  content?: string;
  catLink?: string;
  optionLink?: string;
  contentLink?: string;
}
export function BreadCrumb({
  catTitle,
  optionTitle,
  content,
  catLink,
  optionLink,
  contentLink,
}: BreadCrumbTitle) {
  return (
    <ul className="flex list-none items-center text-sm">
      <li>
        <Link href="/">Trang chủ</Link>
      </li>
      {catTitle && (
        <>
          <ChevronRight size={16} />
          <li>
            <Link href={catLink ? catLink : ""}>{catTitle}</Link>
          </li>
        </>
      )}
      {optionTitle && (
        <>
          <ChevronRight size={16} />
          <li>
            <Link href={optionLink ? optionLink : ""}>{optionTitle}</Link>
          </li>
        </>
      )}
      {content && (
        <>
          <ChevronRight size={16} />
          <li>
            <Link href={contentLink ? contentLink : ""}>{content}</Link>
          </li>
        </>
      )}
    </ul>
  );
}
