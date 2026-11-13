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
      <div className="aurora-blob animate-aurora-slow absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-accent opacity-30 blur-[90px]" />
      <div className="aurora-blob animate-aurora-slower absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand-accent-2 opacity-25 blur-[90px]" />
      <div className="aurora-blob animate-aurora-mid absolute -bottom-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-brand-mint opacity-30 blur-[90px]" />
    </div>
  );
}

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Aurora />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppFloat />
    </div>
  );
}
