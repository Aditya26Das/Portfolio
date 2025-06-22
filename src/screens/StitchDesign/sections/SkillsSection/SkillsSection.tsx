import {
  CodeIcon,
  DatabaseIcon,
  NetworkIcon,
  SettingsIcon,
  BrainIcon,
  FolderGit2Icon,
  TerminalSquareIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  const skills = [
    {
      icon: <CodeIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "Python & C++",
    },
    {
      icon: <SettingsIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "OOPs Concepts",
    },
    {
      icon: <DatabaseIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "MySQL & DBMS",
    },
    {
      icon: <NetworkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "Machine Learning",
    },
    {
      icon: <BrainIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "NLP & GenAI",
    },
    {
      icon: <LayoutDashboardIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "FastAPI & Streamlit",
    },
    {
      icon: <FolderGit2Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "Git & GitHub",
    },
    {
      icon: <TerminalSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
      name: "Linux CLI",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3 p-2 sm:p-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-[#1c1e30] border-[#383d60] hover:shadow-md transition-shadow duration-300"
          >
            <CardContent className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
              <div className="flex-shrink-0">
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-white text-xs sm:text-sm md:text-base leading-4 sm:leading-5 block truncate">
                  {skill.name}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};