"use client";
import { motion } from "framer-motion";

export function ThumbNail() {
  return (
    <div className="relative w-full text-[64px] flex flex-col gap-2 items-center">
      <h1 className="z-[99] text-center font-normal leading-[100px] text-black-0">
        <div className="inline-flex items-center justify-center">
          <span>Blog</span>{" "}
          <motion.span
            className="relative mx-4 overflow-hidden font-extrabold"
            style={{
              fontFamily: "sans-serif",
              background:
                "linear-gradient(90deg, #4CAF8C 0%, #5DC99A 30%, #7EDEB2 60%, #5DC99A 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "1.2em",
              letterSpacing: "0.02em",
              display: "inline-block",
              position: "relative",
            }}
          >
            FOSO
            <motion.div
              className="absolute -left-[100%] top-0 h-full w-[50%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
                transform: "skewX(-20deg)",
              }}
              animate={{
                left: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.span>{" "}
          <span>-</span>
        </div>
        <div className="mt-2 w-full text-center">
          <span>Cập nhật tin tức</span>{" "}
          <span className="relative inline-block font-extrabold">
            Mới Nhất
            <div className="absolute bottom-2 left-0 z-[-1] h-7 w-full rounded-[50px] bg-green-3" />
          </span>
        </div>
      </h1>
      <span className="font-medium text-lg leading-[150%] text-black-3">
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </span>
    </div>
  );
}
