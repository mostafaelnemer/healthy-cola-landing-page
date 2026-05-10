import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getSectionFromHref } from "@/lib/utils";
import { BUY_TOKEN_URL, navMenu } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function MobileNav({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <div className="lg:hidden flex flex-1 items-center justify-between bg-secondary/90 px-8 py-4 rounded-xl">
      <Image
        src="/assets/logos/E3-Blockraise-2.svg"
        alt="Logo"
        width={35}
        height={35}
        className="md:flex"
      />

      <div className="items-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Menu
              size={24}
              fontSize={24}
              className="text-white/80 hover:text-white cursor-pointer"
            />
          </DrawerTrigger>

          <DrawerContent>
            <DrawerTitle className="hidden">Site Navigation Menu</DrawerTitle>

            <div className="p-6">
              {/* Logo and close */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={"/assets/logos/E3-Blockraise-2.svg"}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="bg-secondary p-2 rounded-lg"
                />
                {/* Drawer close button is handled by shadcn */}
                <DrawerClose>
                  <X className="cursor-pointer hover:bg-accent/50 rounded-md" />
                </DrawerClose>
              </div>

              <nav className="flex flex-col gap-4">
                {navMenu.map((item) => {
                  const section = getSectionFromHref(item.href);
                  const isActive = activeSection === section;

                  return (
                    <DrawerClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className="text-lg transition-colors"
                        style={{
                          color: isActive ? "#221e51" : "#666666",
                        }}
                      >
                        {item.title}
                      </Link>
                    </DrawerClose>
                  );
                })}

                <Link href={BUY_TOKEN_URL} target="_blank" className="w-full">
                  <Button className="py-4 w-full text-xs gap-4 flex-1 mt-5">
                    {/*<div>Buy $HEALTH</div>*/}
                    <div>Login</div>
                    <div className="text-primary bg-white rounded-sm">
                      <ArrowRight className="-rotate-45" />
                    </div>
                  </Button>
                </Link>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
