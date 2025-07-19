import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  // Smooth scroll to projects content section
  const handleViewProjects = () => {
    // Find the projects content section directly
    const projectsSection = document.querySelector('section[id="projects"]');
    
    if (projectsSection) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Alternative: look for the "Projects" heading
      const projectsHeadings = Array.from(document.querySelectorAll('h2')).filter(h => 
        h.textContent?.trim() === 'Projects'
      );
      
      // Get the first "Projects" heading we find
      const targetHeading = projectsHeadings[0];
      
      if (targetHeading) {
        const headerHeight = 80;
        const elementPosition = targetHeading.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

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
            <div className="absolute bottom-14 left-4 sm:bottom-16 sm:left-6 md:bottom-[111px] md:left-[216px] flex flex-col gap-1 sm:gap-2 max-w-[60%] sm:max-w-[50%] md:max-w-none">
              <div className="flex flex-col items-start">
                <h2 className="font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] leading-tight sm:leading-tight md:leading-[60px] font-['Inter',Helvetica]">
                  Aditya Das
                </h2>
              </div>

              <div className="w-full sm:w-[200px] md:w-[275px] flex flex-col gap-1 sm:gap-1.5">
                <p className="font-normal text-white text-sm sm:text-base leading-5 sm:leading-6 font-['Inter',Helvetica]">
                  AI/ML Enthusiast
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:adityadas26112003@gmail.com"
                    className="text-[#c3c8e9] hover:text-white text-xs sm:text-sm font-['Inter',Helvetica] transition-colors"
                  >
                    aditya26.das@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+919078881848"
                    className="text-[#c3c8e9] hover:text-white text-xs sm:text-sm font-['Inter',Helvetica] transition-colors"
                  >
                    +91 9078881848
                  </a>
                </div>

              </div>

            </div>
            
            {/* Button - Responsive positioning and sizing with smooth scroll */}
            <Button
              onClick={handleViewProjects}
              className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 md:bottom-4 md:left-[216px] h-8 sm:h-10 md:h-12 px-3 sm:px-4 md:px-5 py-0 bg-[#f1f2f8] text-black rounded-xl sm:rounded-xl font-bold text-xs sm:text-sm md:text-base hover:bg-white active:scale-95 transition-colors cursor-pointer"
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