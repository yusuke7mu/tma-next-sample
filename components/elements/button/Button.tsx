import classNames from "classnames";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  baseStyle?: string;
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  baseStyle = "px-4 py-2 rounded focus:outline-none focus:shadow-outline",
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#fff] border border-black hover:opacity-70",
    secondary: "text-white bg-[#666] hover:opacity-70",
    tertiary: "bg-[#fff] hover:opacity-70 underline",
  };
  const variantStyle = variants[variant];

  return (
    <button
      className={classNames(
        baseStyle,
        variantStyle,
        className,
        disabled && "disabled"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
