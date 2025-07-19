import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const ExperienceSection = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: "Smart ATS Resume Assistant",
      description:
        "Developed an AI-powered resume optimization tool using Google Generative AI and Pinecone, processing over 2,300 resumes with vector embeddings for enhanced ATS matching.",
      imageUrl: "/images/smart_resume_assistant.png",
      appLink: "https://smartresumeai.streamlit.app/",
      githubLink: "https://github.com/Aditya26Das/SmartResumeAssistant",
    },
    {
      id: 2,
      title: "Semantic Book Recommendation System",
      description:
        " Built a Book Recommendation System using Retrieval-Augmented Generation (RAG) over 5,197 books, utilizing zero-shot text classification and sentiment analysis to generate personalized suggestions based on user input description, category, and emotional tone",
      imageUrl: "/images/book_recommender.png",
      appLink: "https://book-recommender-system-bur3.onrender.com/",
      githubLink: "https://github.com/Aditya26Das/Book_Recommender_System.git",
    },
    {
      id: 3,
      title: "AI-Powered Code Writer",
      description:
        "Implemented a Code Writer that interprets natural language prompts to generate clean, executable code in 4 different programming languages, featuring an interactive UI and built-in copy-to-clipboard functionality.",
      imageUrl: "/images/coding_assistant.png",
      appLink: "https://aicodingassistant.onrender.com/",
      githubLink: "https://github.com/Aditya26Das/AICodingAssistant.git",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-3 p-2 sm:p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-transparent w-full flex flex-col"
          >
            <CardContent className="flex flex-col h-full p-0 pb-3">
              <div className="w-full h-[140px] sm:h-[160px] md:h-[169px] rounded-xl bg-[#1c1e30] border border-[#383d60] flex items-center justify-center overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm text-center p-4">${project.title}</div>`;
                    }
                  }}
                />
              </div>
              <div className="flex flex-col flex-grow justify-between gap-2 px-1 mt-3">
                <div className="flex flex-col gap-2">
                  <h3 className="w-full font-medium text-white text-sm sm:text-base leading-5 sm:leading-6 font-sans">
                    {project.title}
                  </h3>
                  <p className="w-full font-normal text-[#969ec4] text-xs sm:text-sm leading-4 sm:leading-[21px] font-sans">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm bg-[#0c164c] border-[#0c164c] text-white hover:bg-[#0a1440] hover:text-white active:scale-95 flex-1 sm:flex-none h-8 sm:h-9"
                    onClick={() => window.open(project.appLink, "_blank")}
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm border-[#383d60] text-[#1b1c1f] hover:bg-[#1c1e30] hover:text-white active:scale-95 flex-1 sm:flex-none h-8 sm:h-9"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};