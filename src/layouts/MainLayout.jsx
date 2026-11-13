import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import AIChatWidget from "../components/AIChatWidget";

function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="aurora-blob animate-aurora-slow absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-sky opacity-20 blur-[90px]" />
      <div className="aurora-blob animate-aurora-slower absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand-accent-ink opacity-16 blur-[90px]" />
      <div className="aurora-blob animate-aurora-mid absolute -bottom-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-brand-mint opacity-20 blur-[90px]" />
    </div>
  );
}

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Aurora />
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
