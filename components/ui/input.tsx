import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const iconSrcMap: Record<string, string> = {
  eth: "/assets/logos/tokens/eth.png",
  usdt: "/assets/logos/tokens/usdt.png",
  card: "/assets/logos/tokens/card.png",
  cola: "/assets/logos/tokens/hcola.png",
};

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  // Lowercase alt for key match
  const iconSrc =
    (props.alt && iconSrcMap[props.alt.toLowerCase()]) || undefined;

  return (
    <div className="relative w-full">
      {iconSrc && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          <Image
            src={iconSrc}
            alt={props.alt || "token-logo"}
            width={24}
            height={24}
          />
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-accent selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          // Add right padding if showing icon
          iconSrc ? "pr-11" : "",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
