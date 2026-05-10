import Link from "next/link";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getSectionFromHref } from "@/lib/utils";
import { BUY_TOKEN_URL, navMenu } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function DekstopNav({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-between bg-secondary/90 px-8 py-4 rounded-xl">
      <Image
        src="/assets/logos/E3-Blockraise-2.svg"
        alt="Logo"
        width={40}
        height={40}
        className="md:flex"
      />

      <nav>
        <ul className="flex items-center gap-1 list-none">
          {navMenu.map((item) => {
            const section = getSectionFromHref(item.href);
            const isActive = activeSection === section;

            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:text-primary/70"
                  style={{
                    color: isActive ? "#ffffff" : "lightgray",
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link href={BUY_TOKEN_URL} target="_blank">
        <Button size="lg" className="gap-4">
          {/*<div>Buy $HEALTH</div>*/}
          <div>Login</div>
          <div className="text-primary bg-white rounded-sm">
            <ArrowRight className="-rotate-45" />
          </div>
        </Button>
      </Link>
    </div>
  );
}
