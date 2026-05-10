import React from "react";
import FirstAbout from "./about";
import Target from "./target";

export default function About() {
  return (
    <section
      id="about"
      className="h-full w-full mx-auto max-w-[1440px] px-5 sm:px-10 2xl:px-0 pb-12 flex flex-col gap-24 scroll-mt-24"
    >
      <FirstAbout />
      <Target />
    </section>
  );
}
