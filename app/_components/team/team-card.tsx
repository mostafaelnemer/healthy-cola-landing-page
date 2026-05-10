import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTelegram, BsTwitterX } from "react-icons/bs";

interface CardTeamProps {
  name: string;
  position: string;
  image: string;
}

export default function CardTeam({ name, position, image }: CardTeamProps) {
  return (
    <div
      className="flex flex-col w-full bg-transparent items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="cursor-pointer flex flex-col bg-white items-center p-5 group rounded-3xl duration-300 ease-out w-fit">
        <div className="overflow-hidden relative w-80 aspect-square mb-4 bg-gradient-to-br from-[#4D44B7] to-[#221E51] rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            sizes="100%"
            className="object-cover rounded-2xl saturate-0 group-hover:saturate-100 transition-all duration-300 ease-in-out"
          />

          <div className="bg-primary w-full h-15 absolute bottom-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out items-center justify-center flex gap-3">
            {/* SOCIAL */}
            <Link
              href={"https://twitter.com/yourprofile"}
              className="bg-gradient-to-br hover:bg-gradient-to-tl from-[#4D44B7] to-[#221E51] p-2 rounded-md text-white"
            >
              <BsTwitterX size={20} />
            </Link>

            <Link
              href={"https://telegram.me/yourprofile"}
              className="bg-gradient-to-br hover:bg-gradient-to-tl from-[#4D44B7] to-[#221E51] p-2 rounded-md text-white"
            >
              <BsTelegram size={20} />
            </Link>

            <Link
              href={"https://linkedin.com/in/yourprofile"}
              className="bg-gradient-to-br hover:bg-gradient-to-tl from-[#4D44B7] to-[#221E51] p-2 rounded-md text-white"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col space-y-2 text-center">
          <h3 className="text-3xl font-medium text-gray-900 group-hover:font-bold duration-300 ease-out">
            {name}
          </h3>
          <p className="text-muted-foreground text-lg duration-300 ease-out">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
