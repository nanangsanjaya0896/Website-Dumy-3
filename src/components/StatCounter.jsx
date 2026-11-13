import Reveal from "./Reveal";
import { useCounter } from "../hooks/useCounter";
import { stats } from "../data/stats";

function StatItem({ stat, index }) {
  const { ref, value } = useCounter(stat.value);

  return (
    <Reveal delay={index * 0.08}>
      <div
        ref={ref}
        className="glass rounded-[28px] px-6 py-9 text-center shadow-soft"
      >
        <p className="font-display text-5xl font-extrabold tracking-tight">
          <span className="text-gradient">
            {value.toLocaleString("id-ID")}
          </span>
          <span className="text-gradient">{stat.suffix}</span>
        </p>
        <p className="mt-3 text-sm font-semibold text-brand-secondary">
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
}

export default function StatCounter() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-accent uppercase">
            Jejak Sejukin
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-brand-primary md:text-5xl">
            Angka yang kami jaga setiap hari.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
