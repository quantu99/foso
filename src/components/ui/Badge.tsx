"use client";

type BadgeProps = {
  title?: string;
  className?: string;
  type?: string;
  children?: React.ReactNode;
};
export function Badge({
  title,
  className = "",
  type = "success",
  children,
}: BadgeProps) {
  return (
    <div
      className={`badge fz-body-third w-fit rounded-lg px-2 py-0.5 ${type} ${className}`}
    >
      {title || children}
    </div>
  );
}
