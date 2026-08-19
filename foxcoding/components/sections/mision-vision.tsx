import { Crosshair, Telescope } from "lucide-react";

const blocks = [
  {
    icon: Crosshair,
    eyebrow: "What guides us",
    title: "Mission",
    body: "We create an environment of innovation and continuous learning where students build software, explore emerging technologies, and apply their knowledge to real needs through projects, hackathons, and competitive programming.",
  },
  {
    icon: Telescope,
    eyebrow: "Where we are going",
    title: "Vision",
    body: "We aim to become a benchmark for student-led technology: achieving outstanding results nationally and internationally while developing original projects that turn knowledge into practical, positive impact.",
  },
];

export function MisionVision() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2">
          {blocks.map(({ icon: Icon, eyebrow, title, body }, index) => (
            <article
              key={title}
              className={`surface-card relative overflow-hidden p-8 sm:p-10 ${index === 1 ? "lg:translate-y-10" : ""}`}
            >
              <span className="absolute right-7 top-6 font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
              <div className="mb-10 grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em]">
                {title}
              </h2>
              <p className="section-copy mt-5">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
