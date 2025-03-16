import { BreadCrumb } from "@/components";
import { MainContent, RightBar } from "@/components/blogsDetail";
import { JSDOM } from "jsdom";

type TableOfContentsItem = {
  id: string;
  text: string;
  level: number;
};

function generateTableOfContents(content: string): TableOfContentsItem[] {
  const dom = new JSDOM(content);
  const headings = dom.window.document.querySelectorAll("h1, h2, h3, h4, h5");
  const toc: TableOfContentsItem[] = [];

  headings.forEach((heading: any, index: any) => {
    const id = `h-${index}`;
    heading.setAttribute("id", id);
    toc.push({
      id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.charAt(1)),
    });
  });

  return toc;
}
export function BlogsDetail({ detail, cats }: any) {
  let processedContent = "";
  let tableOfContents: TableOfContentsItem[] = [];

  if (detail.content) {
    tableOfContents = generateTableOfContents(detail.content);
    const dom = new JSDOM(detail.content);
    const images = dom.window.document.querySelectorAll("img");
    images.forEach((img) => {
      const alt = img.getAttribute("alt");
      if (img.parentElement?.tagName !== "FIGURE" && alt) {
        const figure = dom.window.document.createElement("figure");
        const caption = dom.window.document.createElement("figcaption");
        caption.textContent = alt;

        img.parentNode?.insertBefore(figure, img);
        figure.appendChild(img);
        figure.appendChild(caption);
      }
    });

    processedContent = dom.serialize();
  }
  const exactCatName = cats.find((c: any) => c.id === detail.categoryId)?.name;
  const exactCatType = cats.find((c: any) => c.id === detail.categoryId)?.type;
  return (
    <div className="mx-auto font-raleway lg:max-w-[1440px]">
      <div className="mb-12 mt-8">
        <BreadCrumb
          isDetail
          content={exactCatName}
          optionTitle="Blog"
          optionLink="/blogs"
        />
      </div>
      <div className="flex lg:gap-6">
        <MainContent cat={exactCatName} detail={detail} exactCatType={exactCatType} />
        <RightBar tableOfContents={tableOfContents} />
      </div>
    </div>
  );
}
