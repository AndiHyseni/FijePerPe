import React from "react";
import "./SectionHeader.css";

type SectionHeaderProps = {
  title: string;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode; // actions
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
  children,
}) => {
  const containerStyle: React.CSSProperties =
    align === "center" ? { textAlign: "center" } : {};

  const renderSubtitle = () => {
    if (!subtitle) return null;
    if (typeof subtitle !== "string") {
      return <p className={subtitleClassName}>{subtitle}</p>;
    }
    const parts = subtitle.split(/\n/);
    return (
      <p className={subtitleClassName}>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < parts.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>
    );
  };

  const classNames = ["section-header", className].filter(Boolean).join(" ");

  return (
    <div className={classNames} style={containerStyle}>
      <h1 className={titleClassName}>{title}</h1>
      {renderSubtitle()}
      {children}
    </div>
  );
};

export default SectionHeader;
