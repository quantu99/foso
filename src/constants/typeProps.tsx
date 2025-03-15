export interface BlogProps {
  cats: {
    id: number;
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    postsCount: number;
    featured: boolean;
    order: number;
  };
  blogs: {
    id: number;
    categoryId: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: {
      id: number;
      name: string;
      avatar: string;
      bio: string;
    };
    imageUrl: string;
    tags: any;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    viewCount: number;
    commentCount: number;
    likeCount: number;
    featured: boolean;
    status: string;
  };
}
