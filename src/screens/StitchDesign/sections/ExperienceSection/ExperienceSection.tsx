import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button"; // Make sure you have this button component

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
          <a
            key={project.id}
            href={project.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[280px] max-w-[350px] no-underline"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-transparent">
              <CardContent className="flex flex-col items-start gap-3 p-0 pb-3">
                <div
                  className="w-full h-[169px] rounded-xl"
                  style={{
                    background: `url(${project.imageUrl}) 50% 50% / cover`,
                  }}
                />
                <div className="flex flex-col items-start w-full">
                  <h3 className="w-full font-medium text-white text-base leading-6 font-sans">
                    {project.title}
                  </h3>
                  <p className="w-full font-normal text-[#969ec4] text-sm leading-[21px] font-sans">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open(project.githubLink, "_blank");
                    }}
                  >
                    View GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
