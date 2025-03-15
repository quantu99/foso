import { AllBlogs, BreadCrumb, ThumbNail} from "@/components";

// interface BlogProps {
//   cats: {
//     id: number;
//     name: string;
//     slug: string;
//     description: string;
//     imageUrl: string;
//     createdAt: string;
//     updatedAt: string;
//     postsCount: number;
//     featured: boolean;
//     order: number;
//   };
//   blogs: {
//     id: number;
//     categoryId: number;
//     title: string;
//     slug: string;
//     excerpt: string;
//     content: string;
//     author: {
//       id: number;
//       name: string;
//       avatar: string;
//       bio: string;
//     };
//     imageUrl: string;
//     tags: any;
//     publishedAt: string;
//     createdAt: string;
//     updatedAt: string;
//     viewCount: number;
//     commentCount: number;
//     likeCount: number;
//     featured: boolean;
//     status: string;
//   };
// }
export function BlogsMain({ cats, blogs }: any) {
  return (
    <div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 py-12 lg:max-w-[1280px]">
        <div className="p-16">
          <BreadCrumb catTitle="Tài nguyên" optionTitle="Blog" />
        </div>
        <ThumbNail />
      </div>
      <div className="mx-auto lg:max-w-[1440px]">
        <AllBlogs blogs={blogs} cats={cats} />
      </div>
    </div>
  );
}
