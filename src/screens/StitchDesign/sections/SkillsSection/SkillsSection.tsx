// import {
//   CodeIcon,
//   DatabaseIcon,
//   NetworkIcon,
//   SettingsIcon,
//   BrainIcon,
//   FolderGit2Icon,
//   TerminalSquareIcon,
//   LayoutDashboardIcon,
// } from "lucide-react";
// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const SkillsSection = (): JSX.Element => {
//   const skills = [
//     {
//       icon: <CodeIcon className="w-6 h-6 text-white" />,
//       name: "Python & C++",
//     },
//     {
//       icon: <SettingsIcon className="w-6 h-6 text-white" />,
//       name: "OOPs Concepts",
//     },
//     {
//       icon: <DatabaseIcon className="w-6 h-6 text-white" />,
//       name: "MySQL & DBMS",
//     },
//     {
//       icon: <NetworkIcon className="w-6 h-6 text-white" />,
//       name: "Machine Learning",
//     },
//     {
//       icon: <BrainIcon className="w-6 h-6 text-white" />,
//       name: "NLP & GenAI",
//     },
//     {
//       icon: <LayoutDashboardIcon className="w-6 h-6 text-white" />,
//       name: "FastAPI & Streamlit",
//     },
//     {
//       icon: <FolderGit2Icon className="w-6 h-6 text-white" />,
//       name: "Git & GitHub",
//     },
//     {
//       icon: <TerminalSquareIcon className="w-6 h-6 text-white" />,
//       name: "Linux CLI",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-start gap-3 p-4 self-stretch w-full">
//       <div className="flex items-start gap-3 w-full">
//         {skills.map((skill, index) => (
//           <Card key={index} className="flex-1 bg-[#1c1e30] border-[#383d60]">
//             <CardContent className="flex items-center gap-3 p-4">
//               <div className="flex-col inline-flex items-start flex-[0_0_auto]">
//                 {skill.icon}
//               </div>
//               <div className="flex-col inline-flex items-start flex-[0_0_auto]">
//                 <span className="self-stretch [font-family:'Inter',Helvetica] font-bold text-white text-base leading-5 whitespace-nowrap">
//                   {skill.name}
//                 </span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };


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
      icon: <CodeIcon className="w-6 h-6 text-white" />,
      name: "Python & C++",
    },
    {
      icon: <SettingsIcon className="w-6 h-6 text-white" />,
      name: "OOPs Concepts",
    },
    {
      icon: <DatabaseIcon className="w-6 h-6 text-white" />,
      name: "MySQL & DBMS",
    },
    {
      icon: <NetworkIcon className="w-6 h-6 text-white" />,
      name: "Machine Learning",
    },
    {
      icon: <BrainIcon className="w-6 h-6 text-white" />,
      name: "NLP & GenAI",
    },
    {
      icon: <LayoutDashboardIcon className="w-6 h-6 text-white" />,
      name: "FastAPI & Streamlit",
    },
    {
      icon: <FolderGit2Icon className="w-6 h-6 text-white" />,
      name: "Git & GitHub",
    },
    {
      icon: <TerminalSquareIcon className="w-6 h-6 text-white" />,
      name: "Linux CLI",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3 p-4 w-full">
      <div className="flex flex-wrap gap-4 w-full">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-[#1c1e30] border-[#383d60] min-w-[160px] flex-grow"
          >
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex-col inline-flex items-start">
                {skill.icon}
              </div>
              <div className="flex-col inline-flex items-start">
                <span className="font-bold text-white text-base leading-5">
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
