import { siteConfig } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Let's build something together"
          description="Have a project in mind or want to connect? Send a message — I typically respond within 24 hours."
          align="center"
        />

        <div className="card mx-auto max-w-2xl p-8 sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-all hover:border-primary/35 hover:bg-primary-muted"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Email
              </p>
              <p className="mt-2 text-sm font-medium text-white group-hover:text-primary-light">
                {siteConfig.email}
              </p>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-all hover:border-cta/35 hover:bg-cta-muted"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Phone
              </p>
              <p className="mt-2 text-sm font-medium text-white group-hover:text-cta">
                {siteConfig.phone}
              </p>
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.02] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Location
            </p>
            <p className="mt-2 text-sm font-medium text-white">{siteConfig.location}</p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <SocialLinks />
            <a
              href={`mailto:${siteConfig.email}?subject=Portfolio%20Inquiry`}
              className="btn-cta inline-flex h-11 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold sm:w-auto"
            >
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
