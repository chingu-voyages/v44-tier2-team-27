import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../../styles/components/layout.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layoutWrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
