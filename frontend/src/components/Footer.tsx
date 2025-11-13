import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} FIJE PER PE · Të gjitha të drejtat e
          rezervuara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
