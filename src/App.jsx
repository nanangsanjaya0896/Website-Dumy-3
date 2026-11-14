import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, MotionConfig } from "motion/react";
import MainLayout from "./layouts/MainLayout";
import PageTransition from "./components/PageTransition";
import { useScrollToTop } from "./hooks/useScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function RouteLoader() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center"
      role="status"
      aria-label="Memuat halaman"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-hairline border-t-brand-accent" />
    </div>
  );
}

const routed = (element) => (
  <PageTransition>
    <Suspense fallback={<RouteLoader />}>{element}</Suspense>
  </PageTransition>
);

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={routed(<HomePage />)} />
          <Route path="/about" element={routed(<AboutPage />)} />
          <Route path="/projects" element={routed(<ProjectsPage />)} />
          <Route path="/projects/:id" element={routed(<ProjectDetailPage />)} />
          <Route path="/services" element={routed(<ServicesPage />)} />
          <Route path="/contact" element={routed(<ContactPage />)} />
          <Route path="/artikel" element={routed(<ArticlesPage />)} />
          <Route path="/artikel/:slug" element={routed(<ArticleDetailPage />)} />
          <Route path="*" element={routed(<NotFoundPage />)} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}
