import Image from "next/image";
import { useId } from "react";

type BrandLogoProps = { className?: string; sizes: string };

export default function BrandLogo({ className = "", sizes }: BrandLogoProps) {
  const filterId = `logo-${useId().replace(/:/g, "")}`;
  return (
    <span className={`relative block aspect-[1556/251] shrink-0 overflow-hidden ${className}`}>
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1.1 1.1 1.1 0 -0.1" />
          </filter>
        </defs>
      </svg>
      {/* Frame the approved artwork without resampling or redrawing its lettering. */}
      <Image
        src="/lyfe-logo-uppercase-f.png"
        alt="Lyfe Fitness logo"
        width={1774}
        height={887}
        sizes={sizes}
        className="absolute h-auto max-w-none"
        style={{ width: "114.0103%", left: "-8.6118%", top: "-127.0916%", filter: `url(#${filterId})` }}
      />
    </span>
  );
}
