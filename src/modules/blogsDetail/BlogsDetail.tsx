import { BreadCrumb } from "@/components";
import { MainContent, RightBar } from "@/components/blogsDetail";

export function BlogsDetail({ detail, cats }: any) {
  const exactCatName = cats.find((c: any) => c.id === detail.id).name;
  return (
    <div className="mx-auto lg:max-w-[1440px]">
      <div className="mb-12 mt-8">
        <BreadCrumb
          content={exactCatName}
          optionTitle="Blog"
          optionLink="/blogs"
        />
      </div>
      <div className="flex gap-6">
        <MainContent cat={exactCatName} detail={detail} />
        <RightBar />
      </div>
    </div>
  );
}
