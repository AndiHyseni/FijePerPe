import React from "react";
import "./PageLoader.css";

type PageLoaderProps = {
  isLoading: boolean;
};

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <div className={`page-loader ${isLoading ? "page-loader--visible" : ""}`}>
      <div className="page-loader__spinner">
        <div className="page-loader__dot"></div>
        <div className="page-loader__dot"></div>
        <div className="page-loader__dot"></div>
      </div>
    </div>
  );
};

export default PageLoader;
