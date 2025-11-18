import React from "react";

export type ContactCardProps = {
  label: string;
  value: string;
  className?: string;
};

export const ContactCard: React.FC<ContactCardProps> = ({
  label,
  value,
  className,
}) => {
  return (
    <div className={["contact-card", className].filter(Boolean).join(" ")}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div className="contact-card__label">{label}:</div>
        <div className="contact-card__value">{value}</div>
      </div>
      <div className="contact-card__icon" aria-hidden="true">
        <img src={`/images/about/gjilpera.svg`} alt={label} />
      </div>
    </div>
  );
};

export default ContactCard;
