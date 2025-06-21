import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="p-4">
        <Card className="w-full overflow-hidden rounded-xl border-0">
          <CardContent className="p-0 relative h-[480px] bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%),url(..//depth-6--frame-0.png)_50%_50%_/_cover]">
            <div className="absolute bottom-[111px] left-[216px] flex flex-col gap-2">
              <div className="flex flex-col items-start">
                <h2 className="font-black text-white text-5xl tracking-[-2.00px] leading-[60px] font-['Inter',Helvetica]">
                  Ethan Wong
                </h2>
              </div>
              <div className="w-[275px]">
                <p className="font-normal text-white text-base leading-6 font-['Inter',Helvetica]">
                  AI/ML Specialist
                </p>
              </div>
            </div>
            <Button
              className="absolute bottom-[-13px] left-[216px] h-12 px-5 py-0 bg-[#0c164c] rounded-3xl font-bold text-base"
              variant="default"
            >
              View Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
