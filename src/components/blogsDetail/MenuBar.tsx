"use client";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CSCaretDownSolid, CSCaretUpSolid } from "../iconography";

type TableOfContentsItem = {
  id: string;
  text: string;
  level: number;
};

type MenuBarProps = {
  tableOfContents: TableOfContentsItem[];
};

export function MenuBar({ tableOfContents }: MenuBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHeading = useCallback((text: string) => {
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5"),
    );
    for (const heading of headings) {
      if (heading.textContent === text) {
        heading.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      }
    }
  }, []);
  const generateHierarchicalNumber = (index: number, level: number) => {
    const stack = [0, 0, 0, 0, 0];
    for (let i = 0; i <= index; i++) {
      const currentLevel = tableOfContents[i].level - 1;
      stack[currentLevel]++;
      for (let j = currentLevel + 1; j < stack.length; j++) {
        stack[j] = 0;
      }
    }
    return stack
      .slice(0, level)
      .filter((n) => n !== 0)
      .join(".");
  };
  return (
    <div
      className={`${tableOfContents.length ? "block" : "hidden"} mb-4 rounded-lg bg-transparent p-3`}
    >
      <div
        className=" relative flex cursor-pointer items-center justify-between w-full rounded-lg bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl leading-[200%] font-extrabold  text-black-0">
          Nội dung bài viết
        </span>
        {!isOpen ? (
          <div className="absolute top-4 right-2 h-4 w-4 [&>svg>path]:fill-[#15AA7A]">
            <CSCaretDownSolid />
          </div>
        ) : (
          <div className="absolute top-4 right-2 h-4 w-4 [&>svg>path]:fill-[#15AA7A]">
            <CSCaretUpSolid />
          </div>
        )}
        <motion.div
          className="h-4 w-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <CSCaretDownSolid />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="mt-2 space-y-2 overflow-hidden text-lg leading-[200%] font-medium text-black-3" 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {tableOfContents.map((item, index) => {
              const hierarchicalNumber = generateHierarchicalNumber(
                index,
                item.level,
              );
              return (
                <motion.li
                  key={item.id}
                  className={`cursor-pointer hover:text-green-13 pl-${(item.level - 1) * 4}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHeading(item.text);
                    }}
                  >
                    {item.text}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
