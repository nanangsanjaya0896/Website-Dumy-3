import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import VideoBackground from "./VideoBackground";
import HeroContent from "./HeroContent";

const HERO_TARGETS = [
  ".gsap-hero-eyebrow",
  ".gsap-hero-heading",
  ".gsap-hero-paragraph",
  ".gsap-hero-buttons",
  ".gsap-hero-scroll",
];

export default function Hero() {
  const started = useRef(false);

  const startTimeline = useCallback(() => {
    if (started.current) return;
    started.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const all = [".gsap-header", ...HERO_TARGETS];

    if (reduce) {
      gsap.set(all, { y: 0, opacity: 1 });
      return;
    }

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .to(".gsap-header", { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to(".gsap-hero-eyebrow", { y: 0, opacity: 1, duration: 1 }, 0.3)
      .to(".gsap-hero-heading", { y: 0, opacity: 1, duration: 1 }, 0.4)
      .to(".gsap-hero-paragraph", { y: 0, opacity: 1, duration: 1 }, 0.5)
      .to(".gsap-hero-buttons", { y: 0, opacity: 1, duration: 1 }, 0.6)
      .to(".gsap-hero-scroll", { y: 0, opacity: 1, duration: 1 }, 0.9);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".gsap-header", { y: -40, opacity: 0 });
      gsap.set(HERO_TARGETS, { y: 48, opacity: 0 });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Safety net: never leave the hero hidden if the video stalls.
    const safety = setTimeout(startTimeline, 2600);
    return () => clearTimeout(safety);
  }, [startTimeline]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <VideoBackground onVideoComplete={startTimeline} />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="mt-[-100px] flex flex-col items-center justify-center text-center">
          <HeroContent />
        </div>
      </div>

      <div className="gsap-hero-scroll absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-brand-secondary">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase">
            Gulir ke bawah
          </span>
          <span className="glass grid h-10 w-10 place-items-center rounded-full">
            <ArrowDown size={16} className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
