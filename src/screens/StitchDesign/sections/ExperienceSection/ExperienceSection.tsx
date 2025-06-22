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
      imageUrl: "src/images/smart_resume_assistant.png",
      appLink: "https://smartresumeai.streamlit.app/",
      githubLink: "https://github.com/Aditya26Das/SmartResumeAssistant",
    },
    {
      id: 2,
      title: "LangGraph AI Agent",
      description:
        "Engineered a scalable chatbot platform using LangGraph, ChatGroq LLMs, and FastAPI to serve real-time responses via secure REST APIs, handling 100+ daily API requests.",
      imageUrl: "src/images/langraph_chatbot.png",
      appLink: "https://agenticaichatbot.streamlit.app/",
      githubLink: "https://github.com/Aditya26Das/AgenticAIChatbot",
    },
    {
      id: 3,
      title: "LoanFitAI",
      description:
        "Created a machine learning web app to predict loan eligibility using a Decision Tree model with 93% accuracy, integrating FastAPI and Streamlit for real-time results.",
      imageUrl: "src/images/loan-fit-ai.png",
      appLink: "https://loanfitai.streamlit.app/",
      githubLink: "https://github.com/Aditya26Das/LoanFitAi",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-3 p-4 w-full">
      <div className="flex flex-wrap gap-4 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-1 min-w-[280px] max-w-[350px]"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-transparent">
              <CardContent className="flex flex-col items-start gap-3 p-0 pb-3">
                <div
                  className="w-full h-[169px] rounded-xl bg-[#1c1e30] border border-[#383d60] flex items-center justify-center"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-white text-sm text-center">${project.title}</div>`;
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2">
                  <h3 className="w-full font-medium text-white text-base leading-6 font-sans">
                    {project.title}
                  </h3>
                  <p className="w-full font-normal text-[#969ec4] text-sm leading-[21px] font-sans">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      className="text-sm bg-[#0c164c] border-[#0c164c] text-white hover:bg-[#0a1440] hover:text-white"
                      onClick={() => window.open(project.appLink, "_blank")}
                    >
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      className="text-sm border-[#383d60] text-black hover:bg-[#1c1e30] hover:text-white"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};