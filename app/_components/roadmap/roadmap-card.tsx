import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

export default function RoadmapCard({
  current,
  roadmap,
}: {
  current: number;
  roadmap: RoadmapItem;
}) {
  return (
    <Card
      className={`border w-full md:w-fit rounded-3xl p-5 h-full mr-4 ${
        current === roadmap.index
          ? "bg-gradient-to-b from-[#4D44B7] to-[#221E51]"
          : "bg-muted"
      }`}
    >
      <CardContent className="p-0">
        {/* Quarter Header */}
        <h3 className="bg-feature text-2xl font-medium bg-black text-white py-1 px-3 w-fit rounded-lg">
          {roadmap.time}
        </h3>
        <h4
          className={`text-lg mt-4 mb-6 ${
            current === roadmap.index ? "text-white" : "text-gray-900"
          } `}
        >
          {roadmap.title}
        </h4>

        {/* Content List */}
        <div className="flex flex-col gap-4 bg-white p-5 rounded-xl min-h-[300px]">
          {roadmap.content.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="rounded-lg flex flex-row items-center gap-4"
            >
              <div className="bg-primary rounded-full items-center justify-between p-1">
                <Check className="text-white" size={12} />
              </div>

              <p className="text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
