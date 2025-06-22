import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { AboutMeSection } from "./sections/AboutMeSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export const StitchDesign = (): JSX.Element => {
  // Achievement data for mapping
  const achievements = [
    "Secured a rank of 724 (top 3%) out of 23,596 participants in the Biweekly Contest 145 on LeetCode.",
    "Achieved a rank of 2,297 (top 9%) out of 25,692 participants in the Biweekly Contest 146 on LeetCode.",
    "Ranked 373 (top 13%) out of 2,834 participants in the CodeChef Starters 176 weekly contest.",
    "Attained a consistent ranking among the top 6 students in the branch, placing within the top 10% overall.",
    "Solved more than 350+ problems on LeetCode, showcasing a strong understanding of Data Structures and Algorithms."
  ];

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <div className="flex flex-col w-full bg-[#111421]">
        <div className="flex flex-col w-full">
          <AboutMeSection />

          <div className="flex justify-center px-40 py-5 w-full">
            <div className="flex flex-col max-w-[960px] w-full">
              <ProjectsSection />

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica]">
                  About Me
                </h2>
              </div>

              <div className="flex flex-col pt-1 pb-3 px-4 w-full">
                <p className="font-normal text-white text-base leading-6 [font-family:'Inter',Helvetica]">
                  👋 Hi, I'm Aditya Das, a tech enthusiast passionate about building intelligent systems. I specialize in AI/ML, full-stack app development with FastAPI and Streamlit, and have hands-on experience with Langchain, LLMs, and NLP. I'm also deeply invested in Data Structures & Algorithms, having solved 350+ problems on LeetCode.
                </p>
              </div>

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica]">
                  Projects
                </h2>
              </div>

              <ExperienceSection />

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica]">
                  Skills
                </h2>
              </div>

              <SkillsSection />

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica]">
                  Experience
                </h2>
              </div>

              <AchievementsSection />

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica]">
                  Achievements
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 px-4 w-full">
                {achievements.map((achievement, index) => (
                  <div
                    key={`achievement-${index}`}
                    className="w-full bg-[#1c1e30] border border-[#383d60] rounded-xl px-4 py-3 transition-all hover:shadow-md"
                  >
                    <p className="text-white text-sm leading-6 [font-family:'Inter',Helvetica]">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col pt-5 pb-3 px-4 w-full">
                <h2 className="text-[22px] leading-7 font-bold text-white [font-family:'Inter',Helvetica]">
                  Contact
                </h2>
              </div>

              <div className="flex flex-wrap max-w-[480px] gap-[16px_16px] px-4 py-3">
                <div className="flex flex-col min-w-40 flex-1">
                  <Input
                    className="h-14 p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica]"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="flex flex-wrap max-w-[480px] gap-[16px_16px] px-4 py-3">
                <div className="flex flex-col min-w-40 flex-1">
                  <Input
                    className="h-14 p-[15px] rounded-xl bg-[#1c1e30] border-[#383d60] text-[#969ec4] [font-family:'Inter',Helvetica]"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="flex flex-wrap max-w-[480px] gap-[16px_16px] px-4 py-3">
                <div className="flex flex-col min-w-40 flex-1">
                  <Textarea 
                    className="min-h-36 w-full rounded-xl bg-[#1c1e30] border-[#383d60] text-white placeholder:text-[#969ec4]" 
                    placeholder="Your Message"
                  />
                </div>
              </div>

              <div className="flex px-4 py-3 w-full">
                <Button className="w-[84px] h-10 bg-[#0c164c] rounded-[20px] text-sm font-bold text-white [font-family:'Inter',Helvetica]">
                  Send
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col gap-6 px-5 py-10 w-full">
                <div className="flex flex-wrap justify-center gap-[16px_16px] w-full">
                  <div className="inline-flex items-center flex-col">
                    <div className="inline-flex items-center flex-col">
                      <div className="w-6 h-6 bg-gray-600 rounded" />
                    </div>
                  </div>

                  <div className="inline-flex items-center flex-col">
                    <div className="inline-flex items-center flex-col">
                      <div className="w-6 h-6 bg-gray-600 rounded" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <p className="font-normal text-[#969ec4] text-base text-center leading-6 [font-family:'Inter',Helvetica]">
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