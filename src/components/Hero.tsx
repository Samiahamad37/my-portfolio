import { siteConfig } from "@/data/portfolio";
import SocialLinks from "@/components/ui/SocialLinks";
import IdBadge from "@/components/ui/IdBadge";

export default function Hero() {
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

        <div className="animate-fade-in animation-delay-200 lg:-mt-24 lg:self-start">
          <IdBadge />
        </div>
      </div>
    </section>
  );
}
