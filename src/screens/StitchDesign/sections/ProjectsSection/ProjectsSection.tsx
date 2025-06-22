import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="p-2 sm:p-4">
        <Card className="w-full overflow-hidden rounded-xl border-0">
          <CardContent className="p-0 relative h-[300px] sm:h-[400px] md:h-[480px] bg-gradient-to-r from-[#0c164c] to-[#1a2054] flex items-center">
            {/* Profile Photo - Responsive positioning */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-[80px] md:right-[40px]">
              <div className="w-24 h-32 sm:w-32 sm:h-40 md:w-48 md:h-60 rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-white/20 shadow-2xl bg-white/10">
                <img
                  src="src/images/Profile.jpg"
                  alt="Aditya Das Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text Content - Responsive positioning and sizing */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-[111px] md:left-[216px] flex flex-col gap-1 sm:gap-2 max-w-[60%] sm:max-w-[50%] md:max-w-none">
              <div className="flex flex-col items-start">
                <h2 className="font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] leading-tight sm:leading-tight md:leading-[60px] font-['Inter',Helvetica]">
                  Aditya Das
                </h2>
              </div>
              <div className="w-full sm:w-[200px] md:w-[275px]">
                <p className="font-normal text-white text-sm sm:text-base leading-5 sm:leading-6 font-['Inter',Helvetica]">
                  AI/ML Enthusiast
                </p>
              </div>
            </div>
            
            {/* Button - Responsive positioning and sizing */}
            <Button
              className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 md:bottom-4 md:left-[216px] h-8 sm:h-10 md:h-12 px-3 sm:px-4 md:px-5 py-0 bg-[#0c164c] rounded-2xl sm:rounded-3xl font-bold text-xs sm:text-sm md:text-base hover:bg-[#0a1440] transition-colors"
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