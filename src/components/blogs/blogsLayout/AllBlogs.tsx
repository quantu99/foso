"use client";
import { useState, useEffect } from "react";
import { MainContent } from "./MainContent";
import { RightBar } from "./RightBar";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function AllBlogs({ blogs, cats, title }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    setFilteredBlogs(blogs);
    setSearchTerm("");
  }, [blogs]);
  const handleSearch = (query: any) => {
    setSearchTerm(query);
    if (!query.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const searchResults = blogs.filter((blog: any) => {
      const titleMatch = blog.title
        ?.toLowerCase()
        .includes(query.toLowerCase());
      const contentMatch = blog.content
        ?.toLowerCase()
        .includes(query.toLowerCase());
      const excerptMatch = blog.excerpt
        ?.toLowerCase()
        .includes(query.toLowerCase());
      return titleMatch || contentMatch || excerptMatch;
    });

    setFilteredBlogs(searchResults);
  };

  const goToPage = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);

    if (currentPage > 3) {
      pageNumbers.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i > 1 && i < totalPages) {
        pageNumbers.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push("...");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center gap-8">
      <div className="flex w-[1042px] flex-col gap-[72px]">
        {searchTerm && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Kết quả tìm kiếm cho: "{searchTerm}"
            </h2>
            <p className="text-grey-3">
              {filteredBlogs.length} bài viết được tìm thấy
            </p>
          </div>
        )}

        {filteredBlogs.length > 0 ? (
          <MainContent blogs={currentPosts} cats={cats} title={title} />
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <h3 className="text-xl font-semibold text-black-3">
              Không tìm thấy bài viết nào phù hợp với "{searchTerm}"
            </h3>
            <p className="text-grey-3 mt-2">
              Vui lòng thử lại với từ khóa khác
            </p>
          </div>
        )}

        {totalPages > 1 && filteredBlogs.length > 0 && (
          <div className="my-8 flex items-center justify-between gap-4 text-base">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 rounded-md px-4 py-2 ${
                currentPage === 1
                  ? "cursor-not-allowed text-gray-400"
                  : "text-grey-3 font-semibold transition-all hover:text-black-0"
              }`}
            >
              <ArrowLeft size={16} />
              <span>Trang trước</span>
            </button>

            <div className="flex items-center">
              {getPageNumbers().map((pageNumber, index) => (
                <div key={index}>
                  {pageNumber === "..." ? (
                    <span className="px-2">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(pageNumber)}
                      className={`flex h-10 w-10 items-center justify-center rounded-lg p-3 ${
                        currentPage === pageNumber
                          ? "text-black-4 bg-blue-200"
                          : "text-grey-4 hover:text-black-4 transition-all hover:bg-blue-200"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 rounded-md px-4 py-2 ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-gray-400"
                  : "text-grey-3 font-semibold transition-all hover:text-black-0"
              }`}
            >
              <span>Trang tiếp</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="flex-1">
        <RightBar cats={cats} onSearch={handleSearch} />
      </div>
    </div>
  );
}
