import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const categoryIcons: Record<string, string> = {
  Backend: "⚙",
  Frontend: "◈",
  Mobile: "◉",
  "Databases & Data": "▣",
  "Tools & Other": "◆",
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="From backend services and databases to frontend interfaces and mobile — a stack built for end-to-end delivery."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className={`card card-hover p-6 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg badge-primary text-sm">
                  {categoryIcons[group.category] ?? "•"}
                </span>
                <h3 className="text-base font-semibold text-white">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-primary/30 hover:text-primary-light"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
