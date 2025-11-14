import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import "./Header.css";

type HeaderProps = {
  onContactClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="nav" aria-label="Main">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <Link to="/">
          <img src="/logos/fije_logo.svg" alt="FIJE PER PE logo" />
        </Link>
        <Button
          as="a"
          href="/contact"
          variant="outline"
          size="sm"
          onClick={onContactClick}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54a2 2 0 0 1 1.72 2.64Z"
              fill="#F7E0C6"
            />
          </svg>
          <span className="contact-us-text">Contact Us</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
