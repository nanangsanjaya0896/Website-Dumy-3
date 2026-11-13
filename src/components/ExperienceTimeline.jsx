import Reveal from "./Reveal";
import { milestones } from "../data/company";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[13px] w-px bg-gradient-to-b from-brand-accent via-brand-accent-2 to-brand-mint sm:left-[15px]"
      />
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <Reveal key={milestone.year} delay={index * 0.06}>
            <div className="relative flex gap-6 sm:gap-8">
              <div className="relative flex shrink-0 flex-col items-center">
                <span className="bg-primary-gradient relative z-10 mt-1 grid h-7 w-7 place-items-center rounded-full shadow-md shadow-brand-accent/30 sm:h-8 sm:w-8">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              </div>
              <div className="glass flex-1 rounded-[28px] p-6 shadow-soft sm:p-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-2xl font-extrabold">
                    <span className="text-gradient">{milestone.year}</span>
                  </span>
                  <h3 className="display-card text-lg">{milestone.title}</h3>
                </div>
                <p className="mt-2.5 leading-relaxed text-brand-secondary">
                  {milestone.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
