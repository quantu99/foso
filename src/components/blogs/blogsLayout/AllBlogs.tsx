import { MainContent } from "./MainContent";
import { RightBar } from "./RightBar";

export function AllBlogs({ blogs, cats }: any) {
  return (
    <div className="flex justify-center gap-8">
      <div className="w-[1042px]">
        <MainContent blogs={blogs} cats={cats} />
      </div>
      <div className="flex-1">
        <RightBar cats={cats} />
      </div>
    </div>
  );
}
