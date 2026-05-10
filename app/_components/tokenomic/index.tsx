import Image from "next/image";
import React from "react";

export default function Tokenomic() {
  return (
    <section id="tokenomic" className="h-full w-full pt-0 xl:pt-16">
      <div className="mx-auto max-w-[1440px]">
        <Image
          src={"/assets/images/tokenomic.png"}
          width={2160}
          height={1390}
          alt="HCOLA Tokenomic"
          className="w-full h-auto"
        />
      </div>

      <Image
        src={"/assets/images/tokenomic-bottom.png"}
        width={2160}
        height={904}
        alt="HCOLA Tokenomic"
        className="w-full h-auto"
      />
    </section>
  );
}
