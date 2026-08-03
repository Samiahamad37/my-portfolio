import { siteConfig } from "@/data/portfolio";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            © {year} · {siteConfig.location}
          </p>
        </div>

        <SocialLinks />

        <a
          href="#"
          className="text-sm text-zinc-500 transition-colors hover:text-cta"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
