import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

type ProfileImageProps = {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-12 w-12", px: 48 },
  md: { box: "h-16 w-16", px: 64 },
  lg: { box: "h-28 w-28", px: 112 },
  hero: { box: "h-full w-full", px: 480 },
};

export default function ProfileImage({
  size = "md",
  className = "",
  priority = false,
}: ProfileImageProps) {
  const { box, px } = sizes[size];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-2 ring-primary/30 ${box} ${className}`}
    >
      <Image
        src={siteConfig.profileImage}
        alt={`${siteConfig.name} — professional headshot`}
        width={px}
        height={px}
        priority={priority}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
