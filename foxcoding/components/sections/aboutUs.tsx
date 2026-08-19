import { Braces, Code2, Users } from "lucide-react";

const values = [
  { icon: Code2, label: "Build", text: "Projects with real-world purpose" },
  { icon: Braces, label: "Compete", text: "Hackathons and programming contests" },
  { icon: Users, label: "Connect", text: "A community that learns together" },
];

export function AboutUs() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-heading mt-4">More than a coding club.</h2>
          </div>
          <div>
            <p className="text-pretty text-2xl font-medium leading-[1.45] tracking-[-0.025em] sm:text-3xl">
              FoxCoding promotes curiosity for computing and technology across the <span className="text-accent">CETYS community</span> through meaningful, collaborative work.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-3">
          {values.map(({ icon: Icon, label, text }, index) => (
            <div key={label} className="bg-card p-7 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground"><Icon className="size-5" /></span>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
