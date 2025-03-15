import { AllBlogs, BreadCrumb, ThumbNail} from "@/components";
export function BlogsMain({ cats, blogs, title }: any) {
  return (
    <div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 py-12 lg:max-w-[1280px]">
        <div className="p-16">
          <BreadCrumb catTitle="Tài nguyên" optionTitle="Blog" isBlog />
        </div>
        <ThumbNail />
      </div>
      <div className="mx-auto lg:max-w-[1440px]">
        <AllBlogs title={title} blogs={blogs} cats={cats} />
      </div>
    </div>
  );
}
