import Image from "next/image";
import { siteConfig, skills, stats } from "@/data/portfolio";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  const topSkills = skills.flatMap((g) => g.items).slice(0, 8);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cta/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 animate-fade-in-up">
            {siteConfig.location}
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl animate-fade-in-up animation-delay-100">
            <span className="text-zinc-400">Hi, I&apos;m </span>
            <span className="text-gradient">{siteConfig.shortName}</span>
            <span className="block mt-2 text-white">{siteConfig.title}</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400 animate-fade-in-up animation-delay-200">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-in-up animation-delay-300">
            <a
              href="#projects"
              className="btn-cta inline-flex h-12 items-center justify-center rounded-xl px-7 text-sm font-semibold"
            >
              View Projects
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-primary/30 bg-primary-muted px-7 text-sm font-semibold text-primary-light transition-all hover:border-primary/50 hover:bg-primary/20"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 animate-fade-in-up animation-delay-400">
            <SocialLinks />
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200">
          <div className="card overflow-hidden p-1">
            <div className="rounded-[calc(1rem-4px)] bg-surface-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={siteConfig.profileImage}
                  alt={`${siteConfig.name} — professional headshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-semibold text-white">{siteConfig.name}</p>
                  <p className="text-sm text-primary-light">{siteConfig.title}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-8 grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-primary/10 bg-primary-muted px-3 py-4 text-center"
                    >
                      <p className="text-lg font-bold text-cta sm:text-xl">{stat.value}</p>
                      <p className="mt-1 text-[11px] leading-tight text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-light">
                  Core stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {topSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
