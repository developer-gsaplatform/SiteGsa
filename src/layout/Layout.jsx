import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Chatbot from "../components/layout/Chatbot";
import ScroolTop from "../components/layout/ScroolTop";
import GridLines from "../components/layout/GridLines";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <GridLines />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
      <Chatbot />
      <ScroolTop />
    </div>
  );
}
