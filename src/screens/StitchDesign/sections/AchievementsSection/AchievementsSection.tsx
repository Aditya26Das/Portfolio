import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AchievementsSection = (): JSX.Element => {
  // Data for achievements/work experience
  const experiences = [
    {
      title: " Summer Intern - AI/ML at Neophtyte Ambient Intelligence",
      period: "May 2025 - June 2025",
      isFirst: true,
    },
  ];

  return (
    <Card className="border-none bg-transparent">
      <CardContent className="flex flex-col items-start gap-2 p-4 w-full">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-2 w-full">
            <div className="flex flex-col w-10 items-center gap-1 relative self-stretch">
              {experience.isFirst ? (
                <>
                  <div className="items-start inline-flex flex-col pt-3">
                    <div className="relative w-6 bg-[url(/vector---0-2.svg)] bg-[100%_100%]" />
                  </div>
                  <div className="relative w-0.5 h-8 mb-[-4.00px] bg-[#383d60]" />
                </>
              ) : (
                <>
                  <div className="relative w-0.5 h-2 bg-[#383d60]" />
                  <div className="items-start inline-flex flex-col">
                    <div className="relative w-6 bg-[url(/vector---0-2.svg)] bg-[100%_100%]" />
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col items-start py-3 flex-1">
              <div className="w-full">
                <div className="font-medium text-white text-base leading-6">
                  {experience.title}
                </div>
              </div>
              <div className="w-full mb-[-4.00px]">
                <div className="font-normal text-[#969ec4] text-base leading-6">
                  {experience.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
