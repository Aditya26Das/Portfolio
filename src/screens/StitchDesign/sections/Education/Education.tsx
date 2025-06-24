import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const EducationSection = (): JSX.Element => {
  // Education data
  const education = [
    {
      institution: "IIIT Bhubaneswar, BTech in Information Technology",
      period: "Nov 2022 - Present",
      grade: "CGPA: 8.68",
      isFirst: true,
    },
    {
      institution: "St. Xavier’s High School, Bhubaneswar (CBSE Class XII)",
      period: "May 2021 - May 2022",
      grade: "Percentage: 94.4%",
      isFirst: true,
    },
    {
      institution: "St. Xavier’s High School, Bhubaneswar (CBSE Class X)",
      period: "May 2019 - May 2020",
      grade: "Percentage: 93.8%",
      isFirst: true,
    },
  ];

  return (
    <Card className="border-none bg-transparent">
      <CardContent className="flex flex-col items-start gap-2 p-4 w-full">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-2 w-full">
            <div className="flex flex-col w-10 items-center gap-1 relative self-stretch">
              <div className="items-start inline-flex flex-col pt-3">
                <div className="relative w-6 bg-[url(/vector---0-2.svg)] bg-[100%_100%]" />
              </div>
              <div className="relative w-0.5 h-8 mb-[-4.00px] bg-[#383d60]" />
            </div>

            <div className="flex flex-col items-start py-3 flex-1">
              <div className="w-full">
                <div className="font-medium text-white text-base leading-6">
                  {edu.institution}
                </div>
              </div>
              <div className="w-full">
                <div className="font-normal text-[#969ec4] text-base leading-6">
                  {edu.period}
                </div>
              </div>
              <div className="w-full mb-[-4.00px]">
                <div className="font-normal text-[#969ec4] text-base leading-6">
                  {edu.grade}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
