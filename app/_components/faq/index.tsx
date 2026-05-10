import { faqItems } from "@/lib/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white">
      <section
        id="faq"
        className="relative py-24 w-full mx-auto max-w-[1440px] min-h-screen flex flex-col gap-50  px-5 sm:px-10 2xl:px-0"
      >
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div
            className="w-full h-full flex flex-col items-center lg:items-start justify-center space-y-10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-semibold text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="w-3/4 font-inter text-muted-foreground text-base text-center lg:text-left">
              {`Need quick answers? This FAQ section covers the key things to know about our product, service, and process`}
            </p>
          </div>

          <div
            className="w-full h-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Accordion
              type="single"
              className="w-full"
              defaultValue="item-1"
              collapsible
            >
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx + 1}`}
                  className="py-2 border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 100}`}
                >
                  <AccordionTrigger className="bg-muted text-gray-900 p-6 font-medium text-xl rounded-t-2xl data-[state=open]:bg-[#4D44B7] data-[state=open]:text-white data-[state=open]:rounded-b-none transition-all duration-300 ease-in-out">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-gradient-to-b from-[#4D44B7] to-[#221E51] flex flex-col gap-4 font-light text-base rounded-b-2xl text-white px-6 pb-6 transition-all duration-300 ease-in-out">
                    <div className="whitespace-pre-line">{item.content}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
