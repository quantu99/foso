export function ThumbNail() {
  return (
    <div className="text-[64px]">
      <h1 className="font-normal text-center leading-[100px]">
        Blog{" "}
        <span 
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #4CAF8C 0%, #5DC99A 30%, #7EDEB2 60%, #5DC99A 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: "1.2em",
            letterSpacing: "0.02em"
          }}
        >
          FOSO
        </span>{" "}
        - <br /> Cập nhật tin tức <b>Mới Nhất</b>
      </h1>
    </div>
  );
}