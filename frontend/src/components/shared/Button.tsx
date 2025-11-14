import React from "react";

type ButtonVariant = "primary" | "light" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  className?: string;
};

const sizeToPadding: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "13px 19px",
  md: "14px 22px",
  lg: "16px 26px",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  onClick,
  className,
}) => {
  const classNames = ["btn", `btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const style = { padding: sizeToPadding[size], gap: "3px" };

  if (as === "a") {
    return (
      <a href={href} className={classNames} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={classNames}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
