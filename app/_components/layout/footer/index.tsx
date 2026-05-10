import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services, socialItems } from "@/lib/constants";

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
}

const RenderSocialIcon = ({ Icon, href }: SocialIconProps) => (
  <Link href={href} target="_blank">
    <Button
      size="icon"
      variant="ghost"
      className="bg-secondary/50 border rounded-lg border-white/20 hover:!bg-primary hover:border-primary transition-colors duration-300"
    >
      <Icon className="text-white hover:text-primary transition-colors duration-300" />
    </Button>
  </Link>
);

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full h-full relative bg-gradient-to-b from-[#221E51] from-40% to-[#4D44B7] flex flex-col px-10 pl-20 2xl:pl-10 rounded-tl-[150px] overflow-hidden pb-40 sm:pb-0"
    >
      {/* Absolute Background */}
      <>
        <div
          data-aos="fade-in"
          className="absolute -bottom-[200px] left-1/2 translate-x-[-45%] w-[400px] h-[400px] bg-[#7468FE] blur-xl rounded-full pointer-events-none z-0"
        />
        <Image
          data-aos="zoom-in"
          src={"/assets/images/footer-image.png"}
          alt="footer image"
          width={500}
          height={500}
          className="object-contain absolute bottom-0 left-1/2 translate-x-[-50%] h-auto w-full max-w-[500px] select-none pointer-events-none"
        />
      </>

      <div className="w-full h-full py-20 flex flex-col items-center justify-center mx-auto max-w-[1440px]">
        <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center lg:items-start">
          <div
            data-aos="fade-right"
            className="w-full h-fit flex flex-col items-start justify-start space-y-8"
          >
            <Link href="/" className="relative w-16 h-16">
              <Image
                src={"/assets/logos/E3-Blockraise-2.svg"}
                alt="Logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </Link>

            <p className="text-white/75 text-base w-3/4">
              {`Zero sugar. Zero calories. Just pure cola taste—crafted for modern lifestyles`}
            </p>

            <div className="w-fit h-fit grid grid-cols-4 gap-5">
              {socialItems.map((item, idx) => (
                <RenderSocialIcon key={idx} Icon={item.Icon} href={item.href} />
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="w-full h-full mt-10 sm:mt-0">
            <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-around sm:items-center lg:items-start">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col space-y-3 lg:space-y-6">
                  <h3 className="text-white text-xl font-medium">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-white/75 hover:text-white hover:underline transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-24 w-full h-fit flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-5 lg:space-y-0">
          <p className="text-white text-base whitespace-nowrap">
            HCOLA 2025 ©, All rights reserved
          </p>

          <div className="w-full flex flex-row space-x-4 items-center justify-between lg:justify-end">
            <Link
              href="/terms-of-service"
              className="text-white underline transition-colors duration-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy-policy"
              className="text-white underline transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
