export function getLinkDetailBlog(catSlug: any, slug: any, id: number) {
  return `/${catSlug}/${slug}-${id}.html`;
}
export function getLinkCategory(slug: any) {
  return `/${slug}`;
}
