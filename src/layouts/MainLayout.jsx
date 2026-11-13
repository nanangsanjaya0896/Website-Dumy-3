import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import AIChatWidget from "../components/AIChatWidget";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="focus-ring sr-only rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
      >
        Lewati ke konten utama
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppFloat />
    </div>
  );
}
