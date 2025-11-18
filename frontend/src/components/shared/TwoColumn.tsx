import React from "react";

type TwoColumnProps = {
  image?: React.ReactNode; // custom image slot
  imageStyle?: React.CSSProperties;
  className?: string;
  imageClassName?: string;
  copyClassName?: string;
  children: React.ReactNode; // copy
};

export const TwoColumn: React.FC<TwoColumnProps> = ({
  image,
  imageStyle,
  className,
  imageClassName,
  copyClassName,
  children,
}) => {
  return (
    <div className={["about__two-col-grid", className].filter(Boolean).join(" ")}>
      <div
        className={["about__image", imageClassName].filter(Boolean).join(" ")}
        style={imageStyle}
      >
        {image}
      </div>
      <div className={["about__copy", copyClassName].filter(Boolean).join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default TwoColumn;


