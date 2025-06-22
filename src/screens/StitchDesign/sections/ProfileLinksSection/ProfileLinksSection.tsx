import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ExternalLink, Github, Linkedin, Code, Trophy } from "lucide-react";

export const ProfileLinksSection = (): JSX.Element => {
  const profileLinks = [
    {
      name: "LeetCode",
      url: "https://www.leetcode.com/u/Aditya_das26/",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
      description: "350+ problems solved",
      color: "border-orange-500/30 hover:border-orange-500/50"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/adityadas26",
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
      description: "Competitive programming",
      color: "border-amber-500/30 hover:border-amber-500/50"
    },
    {
      name: "GitHub",
      url: "https://www.github.com/Aditya26Das",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />,
      description: "Open source projects",
      color: "border-gray-400/30 hover:border-gray-400/50"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya26das",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
      description: "Professional network",
      color: "border-blue-500/30 hover:border-blue-500/50"
    }
  ];

  const handleProfileClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-start gap-3 p-2 sm:p-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {profileLinks.map((profile, index) => (
          <Card
            key={index}
            className={`bg-[#1c1e30] border-[#383d60] ${profile.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            onClick={() => handleProfileClick(profile.url)}
          >
            <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111421] group-hover:scale-110 transition-transform duration-300">
                {profile.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                  {profile.name}
                </h3>
                <p className="font-normal text-[#969ec4] text-xs sm:text-sm leading-tight">
                  {profile.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#969ec4] group-hover:text-white transition-colors duration-300" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};