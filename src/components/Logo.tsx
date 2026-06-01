import Image from "next/image";
import { company } from "@/lib/company";

const sizes = {
  sm: 36,
  md: 48,
  lg: 64,
} as const;

const framePadding = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
} as const;

const imageSizeClass = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-16 w-16",
} as const;

type LogoProps = {
  href?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: keyof typeof sizes;
  /** Latar putih halus — cocok di header/footer navy */
  onDark?: boolean;
  className?: string;
};

export default function Logo({
  href = "#beranda",
  showText = true,
  showTagline = false,
  size = "md",
  onDark = false,
  className = "",
}: LogoProps) {
  const dimension = sizes[size];

  const image = (
    <Image
      src={company.logoSrc}
      alt=""
      width={dimension}
      height={dimension}
      className={`shrink-0 object-contain transition-opacity group-hover:opacity-95 ${imageSizeClass[size]}`}
      priority={size === "md"}
      aria-hidden
    />
  );

  return (
    <a
      href={href}
      className={`group flex items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={company.fullName}
    >
      {onDark ? (
        <span
          className={`inline-flex shrink-0 rounded-md bg-white shadow-sm ring-1 ring-white/30 transition-shadow group-hover:shadow-md group-hover:ring-gold/50 ${framePadding[size]}`}
        >
          {image}
        </span>
      ) : (
        image
      )}

      {showText && (
        <div className="min-w-0 leading-tight">
          <p
            className={`font-serif font-semibold tracking-wide text-white ${
              size === "lg" ? "text-base sm:text-lg" : "text-xs sm:text-sm"
            }`}
          >
            {company.name}
          </p>
          <p className="text-[9px] uppercase tracking-[0.18em] text-gold/90 sm:text-[10px] sm:tracking-[0.2em]">
            {company.suffix}
          </p>
          {showTagline && (
            <p className="mt-1 hidden text-[10px] text-white/45 sm:block">
              {company.tagline}
            </p>
          )}
        </div>
      )}
    </a>
  );
}
