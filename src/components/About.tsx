import Image from "next/image";
import { aboutSummary, conferences, education, siteConfig } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ProfileImage from "@/components/ui/ProfileImage";

export default function About() {
  return (
    <section id="about" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Building end-to-end products"
          description="Full-stack developer with experience across APIs, databases, AI platforms, and user-facing applications."
        />

        <div className="space-y-12 lg:space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <ProfileImage size="lg" className="shrink-0 shadow-lg shadow-primary/20" />
                <div>
                  <p className="font-semibold text-white">{siteConfig.name}</p>
                  <p className="mt-1 text-sm text-primary-light">{siteConfig.title}</p>
                  <p className="mt-2 text-sm text-zinc-500">{siteConfig.location}</p>
                </div>
              </div>

              {aboutSummary.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-zinc-400 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  Education
                </h3>
                {education.map((item) => (
                  <article
                    key={item.institution}
                    className="card card-hover p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{item.degree}</p>
                        <p className="mt-1 text-sm text-primary-light">{item.institution}</p>
                      </div>
                      <span className="shrink-0 rounded-full badge-cta px-3 py-1 text-xs font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Conferences & Exposure
            </h3>
            <div className="space-y-4">
              {conferences.map((event) => (
                <article
                  key={event.name}
                  className="event-card card card-hover p-4 md:p-5"
                >
                  <div className="event-meta">
                    <div className="event-badge">{event.year}</div>
                    <div className="min-w-0">
                      <p className="font-medium text-white">{event.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {event.images.length > 0 && (
                    <div className="event-gallery marquee-shell">
                      <div className="marquee-track">
                        {[...event.images, ...event.images].map((image, index) => (
                          <div
                            key={`${event.name}-${index}`}
                            className="marquee-item relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-zinc-900"
                          >
                            <Image
                              src={image}
                              alt={`${event.name} conference photo ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 45vw, 220px"
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
