// import React, { useEffect } from "react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { AboutMeSection } from "./sections/AboutMeSection";
// import { AchievementsSection } from "./sections/AchievementsSection";
// import { ExperienceSection } from "./sections/ExperienceSection";
// import { ProjectsSection } from "./sections/ProjectsSection";
// import { SkillsSection } from "./sections/SkillsSection";
// import { ProfileLinksSection } from "./sections/ProfileLinksSection";

// export const StitchDesign = (): JSX.Element => {
//   // Achievement data for mapping
//   const achievements = [
//     "Secured a rank of 724 (top 3%) out of 23,596 participants in the Biweekly Contest 145 on LeetCode.",
//     "Achieved a rank of 2,297 (top 9%) out of 25,692 participants in the Biweekly Contest 146 on LeetCode.",
//     "Ranked 373 (top 13%) out of 2,834 participants in the CodeChef Starters 176 weekly contest.",
//     "Attained a consistent ranking among the top 6 students in the branch, placing within the top 10% overall.",
//     "Solved more than 350+ problems on LeetCode, showcasing a strong understanding of Data Structures and Algorithms."
//   ];

//   // Add smooth scrolling behavior on component mount
//   useEffect(() => {
//     // Enable smooth scrolling for the entire document
//     document.documentElement.style.scrollBehavior = 'smooth';
    
//     // Cleanup function to reset scroll behavior
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-start w-full bg-white">
//       <div className="flex flex-col w-full bg-[#111421]">
//         <div className="flex flex-col w-full">
//           <AboutMeSection />

//           <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 w-full">
//             <div className="flex flex-col max-w-[960px] w-full">
//               {/* Hero Projects Section */}
//               <section id="projects-hero" className="scroll-mt-20">
//                 <ProjectsSection />
//               </section>

//               {/* About Section */}
//               <section id="about" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     About Me
//                   </h2>
//                 </div>

//                 <div className="flex flex-col pt-1 pb-3 px-2 sm:px-4 w-full">
//                   <p className="font-normal text-white text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
//                     👋 Hi, I'm Aditya Das, a tech enthusiast passionate about building intelligent systems. I specialize in AI/ML, full-stack app development with FastAPI and Streamlit, and have hands-on experience with Langchain, LLMs, and NLP. I'm also deeply invested in Data Structures & Algorithms, having solved 350+ problems on LeetCode.
//                   </p>
//                 </div>
//               </section>

//               {/* Projects Content Section */}
//               <section id="projects" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     Projects
//                   </h2>
//                 </div>

//                 <ExperienceSection />
//               </section>

//               {/* Skills Section */}
//               <section id="skills" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     Skills
//                   </h2>
//                 </div>

//                 <SkillsSection />
//               </section>

//               {/* Experience Section */}
//               <section id="experience" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     Experience
//                   </h2>
//                 </div>

//                 <AchievementsSection />
//               </section>

//               {/* Achievements Section */}
//               <section id="achievements" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     Achievements
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 gap-3 sm:gap-4 px-2 sm:px-4 w-full">
//                   {achievements.map((achievement, index) => (
//                     <div
//                       key={`achievement-${index}`}
//                       className="w-full bg-[#1c1e30] border border-[#383d60] rounded-xl px-3 sm:px-4 py-3 transition-all hover:shadow-md"
//                     >
//                       <p className="text-white text-xs sm:text-sm leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
//                         {achievement}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Profile Links Section */}
//               <section id="profiles" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
//                     Connect With Me
//                   </h2>
//                 </div>

//                 <ProfileLinksSection />
//               </section>

//               {/* Contact Section */}
//               <section id="contact" className="scroll-mt-20">
//                 <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
//                   <h2 className="text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 font-bold text-white [font-family:'Inter',Helvetica]">
//                     Contact
//                   </h2>
//                 </div>

//                 <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
//                   <div className="flex flex-col w-full min-w-0 flex-1">
//                     <Input
//                       className="h-12 sm:h-14 p-3 sm:p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica] text-sm sm:text-base"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
//                   <div className="flex flex-col w-full min-w-0 flex-1">
//                     <Input
//                       className="h-12 sm:h-14 p-3 sm:p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica] text-sm sm:text-base"
//                       placeholder="Your Email"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
//                   <div className="flex flex-col w-full min-w-0 flex-1">
//                     <Textarea 
//                       className="min-h-32 sm:min-h-36 w-full rounded-xl bg-[#1c1e30] border-[#383d60] text-white placeholder:text-[#969ec4] text-sm sm:text-base p-3 sm:p-4" 
//                       placeholder="Your Message"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex px-2 sm:px-4 py-3 w-full">
//                   <Button className="w-20 sm:w-[84px] h-10 bg-[#0c164c] rounded-[20px] text-sm font-bold text-white [font-family:'Inter',Helvetica] hover:bg-[#0a1440]">
//                     Send
//                   </Button>
//                 </div>
//               </section>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex justify-center w-full">
//             <div className="flex flex-col max-w-[960px] flex-1">
//               <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-5 py-8 sm:py-10 w-full">
//                 <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
//                   <div className="inline-flex items-center flex-col">
//                     <div className="inline-flex items-center flex-col">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded" />
//                     </div>
//                   </div>

//                   <div className="inline-flex items-center flex-col">
//                     <div className="inline-flex items-center flex-col">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center w-full">
//                   <p className="font-normal text-[#969ec4] text-sm sm:text-base text-center leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
//                     ©2025 Aditya Das. All rights reserved.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { AboutMeSection } from "./sections/AboutMeSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProfileLinksSection } from "./sections/ProfileLinksSection";

export const StitchDesign = (): JSX.Element => {
  // Achievement data for mapping
  const achievements = [
    "Secured a rank of 724 (top 3%) out of 23,596 participants in the Biweekly Contest 145 on LeetCode.",
    "Achieved a rank of 2,297 (top 9%) out of 25,692 participants in the Biweekly Contest 146 on LeetCode.",
    "Ranked 373 (top 13%) out of 2,834 participants in the CodeChef Starters 176 weekly contest.",
    "Attained a consistent ranking among the top 6 students in the branch, placing within the top 10% overall.",
    "Solved more than 350+ problems on LeetCode, showcasing a strong understanding of Data Structures and Algorithms."
  ];

  // Add smooth scrolling behavior on component mount
  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function to reset scroll behavior
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <div className="flex flex-col w-full bg-[#111421]">
        <div className="flex flex-col w-full">
          <AboutMeSection />

          <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-40 py-5 w-full">
            <div className="flex flex-col max-w-[960px] w-full">
              {/* Hero Projects Section */}
              <section id="projects-hero" className="scroll-mt-20">
                <ProjectsSection />
              </section>

              {/* About Section */}
              <section id="about" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    About Me
                  </h2>
                </div>

                <div className="flex flex-col pt-1 pb-3 px-2 sm:px-4 w-full">
                  <p className="font-normal text-white text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
                    👋 Hi, I'm Aditya Das, a tech enthusiast passionate about building intelligent systems. I specialize in AI/ML, full-stack app development with FastAPI and Streamlit, and have hands-on experience with Langchain, LLMs, and NLP. I'm also deeply invested in Data Structures & Algorithms, having solved 350+ problems on LeetCode.
                  </p>
                </div>
              </section>

              {/* Projects Content Section */}
              <section id="projects" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    Projects
                  </h2>
                </div>

                <ExperienceSection />
              </section>

              {/* Skills Section */}
              <section id="skills" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    Skills
                  </h2>
                </div>

                <SkillsSection />
              </section>

              {/* Experience Section */}
              <section id="experience" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    Experience
                  </h2>
                </div>

                <AchievementsSection />
              </section>

              {/* Achievements Section */}
              <section id="achievements" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    Achievements
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4 px-2 sm:px-4 w-full">
                  {achievements.map((achievement, index) => (
                    <div
                      key={`achievement-${index}`}
                      className="w-full bg-[#1c1e30] border border-[#383d60] rounded-xl px-3 sm:px-4 py-3 transition-all hover:shadow-md"
                    >
                      <p className="text-white text-xs sm:text-sm leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Profile Links Section */}
              <section id="profiles" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="font-bold text-white text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 [font-family:'Inter',Helvetica]">
                    Connect With Me
                  </h2>
                </div>

                <ProfileLinksSection />
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-20">
                <div className="flex flex-col pt-5 pb-3 px-2 sm:px-4 w-full">
                  <h2 className="text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 font-bold text-white [font-family:'Inter',Helvetica]">
                    Contact
                  </h2>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-4 pb-4 w-full">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#0c164c] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <a 
                        href="mailto:adityadas26112003@gmail.com"
                        className="text-[#969ec4] hover:text-white text-sm sm:text-base [font-family:'Inter',Helvetica] transition-colors"
                      >
                        adityadas26112003@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#0c164c] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </div>
                      <a 
                        href="tel:+919078881848"
                        className="text-[#969ec4] hover:text-white text-sm sm:text-base [font-family:'Inter',Helvetica] transition-colors"
                      >
                        +91 9078881848
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
                  <div className="flex flex-col w-full min-w-0 flex-1">
                    <Input
                      className="h-12 sm:h-14 p-3 sm:p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica] text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
                  <div className="flex flex-col w-full min-w-0 flex-1">
                    <Input
                      className="h-12 sm:h-14 p-3 sm:p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica] text-sm sm:text-base"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap max-w-full sm:max-w-[480px] gap-3 sm:gap-4 px-2 sm:px-4 py-3">
                  <div className="flex flex-col w-full min-w-0 flex-1">
                    <Textarea 
                      className="min-h-32 sm:min-h-36 w-full rounded-xl bg-[#1c1e30] border-[#383d60] text-white placeholder:text-[#969ec4] text-sm sm:text-base p-3 sm:p-4" 
                      placeholder="Your Message"
                    />
                  </div>
                </div>

                <div className="flex px-2 sm:px-4 py-3 w-full">
                  <Button className="w-20 sm:w-[84px] h-10 bg-[#0c164c] rounded-[20px] text-sm font-bold text-white [font-family:'Inter',Helvetica] hover:bg-[#0a1440]">
                    Send
                  </Button>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center w-full">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-5 py-8 sm:py-10 w-full">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                  <div className="inline-flex items-center flex-col">
                    <div className="inline-flex items-center flex-col">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded" />
                    </div>
                  </div>

                  <div className="inline-flex items-center flex-col">
                    <div className="inline-flex items-center flex-col">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <p className="font-normal text-[#969ec4] text-sm sm:text-base text-center leading-5 sm:leading-6 [font-family:'Inter',Helvetica]">
                    ©2025 Aditya Das. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};