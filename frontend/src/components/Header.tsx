import React from "react";
import Button from "./shared/Button";

type HeaderProps = {
  onContactClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="/">
          <span className="brand__mark">FP</span>
          <span className="brand__name">FIJE PER PE</span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#home">Home</a>
          <a href="#contact">Contact us</a>
          <a href="#about">About Us</a>
        </nav>
        <Button
          as="a"
          href="#contact"
          variant="outline"
          size="sm"
          onClick={onContactClick}
        >
          <span aria-hidden="true">📞</span> Contact us
        </Button>
      </div>
    </header>
  );
};

export default Header;
