export function ThumbNail() {
  return (
    <div className="text-[64px]">
      <h1 className="font-normal text-black-2 leading-[100px] text-center">
        Blog{" "}
        <span 
          style={{
            fontFamily: "inherit",
            fontWeight: "extrabold",
            background: "linear-gradient(90deg, #53B086 0%, rgba(83, 176, 134, 0.99) 27.5%), radial-gradient(17.7% 241.79% at 46.95% 25.05%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.41) 34.38%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          FOSO
        </span>{" "}
        - <br /> Cập nhật tin tức <b>Mới Nhất</b>
      </h1>
    </div>
  );
}