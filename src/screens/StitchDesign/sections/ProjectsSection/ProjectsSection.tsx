import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="p-4">
        <Card className="w-full overflow-hidden rounded-xl border-0">
          <CardContent className="p-0 relative h-[480px] bg-gradient-to-r from-[#0c164c] to-[#1a2054] flex items-center">
            {/* Profile Photo */}
            <div className="absolute bottom-[80px] right-[40px]">
              <div className="w-48 h-60 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10">
                <img
                  src="src/images/Profile.jpg"
                  alt="Aditya Das Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute bottom-[111px] left-[216px] flex flex-col gap-2">
              <div className="flex flex-col items-start">
                <h2 className="font-black text-white text-5xl tracking-[-2.00px] leading-[60px] font-['Inter',Helvetica]">
                  Aditya Das
                </h2>
              </div>
              <div className="w-[275px]">
                <p className="font-normal text-white text-base leading-6 font-['Inter',Helvetica]">
                  AI/ML Enthusiast
                </p>
              </div>
            </div>
            <Button
              className="absolute bottom-4 left-[216px] h-12 px-5 py-0 bg-[#0c164c] rounded-3xl font-bold text-base hover:bg-[#0a1440] transition-colors"
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