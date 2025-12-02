import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageLoader from "../PageLoader/PageLoader";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { usePageLoader } from "../../hooks/usePageLoader";

const Layout: React.FC = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <ScrollToTop />
      <PageLoader isLoading={isLoading} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
