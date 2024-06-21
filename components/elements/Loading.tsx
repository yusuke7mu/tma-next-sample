import classNames from "classnames";

export default function Loading({
  hexColor = "#21394D",
  bgColor,
  className = "h-14 w-14 border-[6px]",
}: {
  hexColor?: string;
  bgColor?: string;
  className?: string;
}) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
      aria-label="読み込み中"
    >
      <div
        className={classNames(
          `animate-spin  border-[${hexColor}] rounded-full border-t-transparent`,
          className
        )}
      ></div>
    </div>
  );
}
