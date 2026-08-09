import React, { useEffect, useState } from "react";
import ExperienceDiv from "./ExperienceDiv";

const experiences = [
  {
    id: "experience-1",
    title: "Backend Lead (Intern)",
    company: "Mr. Loggage",
    location: "Vadodara, Gujarat, India",
    duration: "Jun 2024 – Aug 2024",
    shortDescription:
      "Led backend development at a college-incubated logistics startup, building the Express.js backend from the ground up.",
    certificate: "/certificates/Experience/MrLoggageCertificate.pdf",
    detailedDescription: `
# Backend Lead (Intern) - Mr. Loggage

## Role Overview
Mr. Loggage is a logistics startup incubated at my college, working out of a shared workspace on campus. I led backend development and built the Express.js backend from the ground up — from the first route to a working product.

## What I Built
- **REST APIs**: Designed and implemented the RESTful API layer powering the client applications
- **Authentication**: Implemented JWT-based authentication and authorization for secure access
- **Databases**: Designed schemas and data access across MongoDB and PostgreSQL
- **Payments**: Integrated a payment gateway for customer transactions
- **Logging**: Set up structured logging and request tracing with Winston and Morgan
- **Documentation**: Wrote API documentation so the rest of the team could build against the backend

## Skills Developed
- Express.js and Node.js development from a blank repository to production
- Database design across MongoDB and PostgreSQL
- API security and authentication (JWT)
- Version control with Git and collaborative development
    `,
    skills: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "REST APIs",
      "Git",
    ],
    type: "Backend Development",
    status: "Completed",
  },
  {
    id: "experience-2",
    title: "Backend Intern",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "Jul 2024 – Dec 2024",
    shortDescription:
      "Django backend development for an AI film pre-production and production management SaaS platform.",
    certificate: "/certificates/Experience/StoryvordCertificate.pdf",
    detailedDescription: `
# Backend Intern - Storyvord Ltd.

## Company Overview
Storyvord is a London-based SaaS company building an AI-powered film pre-production and production management platform — taking film teams from script to screen with AI-assisted planning, budgeting, and creative tooling.

## Role Details
I joined Storyvord remotely as a Backend Intern in July 2024, working on the Django backend that powers the platform. Within about six months I was promoted to Software Developer Intern based on ownership and output.

## Key Contributions
- **Django Development**: Built and maintained backend services using Django and Django REST Framework
- **API Development**: Designed RESTful APIs serving the platform's web applications
- **Database Design**: Modeled production-domain data (projects, crew, tasks, files) with the Django ORM and PostgreSQL
- **Access Control**: Worked on project-level role-based access so film teams could safely collaborate on shared productions
- **System Integration**: Integrated third-party services and internal pipelines into the backend
- **Async Processing**: Used Celery and Redis for background jobs and long-running tasks

## Technical Skills Gained
- Production Django and Python development on a real SaaS codebase
- RESTful API design and code review discipline
- Database modeling and query performance
- Working remotely with a distributed product team
    `,
    skills: [
      "Django",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    type: "Backend Development",
    status: "Completed",
  },
  {
    id: "experience-3",
    title: "Software Developer Intern",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "Jan 2025 – Apr 2026",
    shortDescription:
      "Promoted from Backend Intern within 6 months; built core Creative Hub backend features — multi-provider image generation with cost-aware routing, credit wallet and pricing schema, Celery orchestration, and project-level RBAC.",
    detailedDescription: `
# Software Developer Intern - Storyvord Ltd.

## Role Overview
Promoted from Backend Intern to Software Developer Intern within about six months, based on ownership and output. In this role I moved from maintaining backend services to building core product features for the Creative Hub — Storyvord's AI-assisted creative tooling for film teams.

## Key Contributions
- **Creative Hub Backend**: Built core Creative Hub backend features on Django and PostgreSQL
- **Image Generation**: Implemented multi-provider AI image generation with cost-aware routing across providers
- **Credit System**: Designed the credit wallet and the per-model, per-tier pricing schema behind it
- **Async Orchestration**: Ran generation workloads through Celery queues so pipeline stages scale independently
- **Access Control**: Implemented project-level role-based access control (RBAC) so film teams can safely collaborate

## Technical Skills Gained
- Owning product features end to end on a production Django/PostgreSQL codebase
- Designing billing and pricing data models
- Cost-aware routing across multiple AI image providers
- Asynchronous task orchestration with Celery and Redis
    `,
    skills: [
      "Django",
      "Python",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Django REST Framework",
      "Docker",
    ],
    type: "Backend Development",
    status: "Completed",
  },
  {
    id: "experience-4",
    title: "Founding Software Engineer",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "May 2026 – Present",
    shortDescription:
      "Founding-team engineer operating at lead scope on an AI film production platform — mentoring 4 interns, authoring PRDs and system-design reviews, sole author of the Creative Hub frontend, and builder of Script Intelligence, a nine-stage screenplay-analysis engine.",
    detailedDescription: `
# Founding Software Engineer - Storyvord Ltd.

## Role Evolution
Storyvord builds an AI film pre-production and production management SaaS platform. I grew from Backend Intern to Software Developer Intern to Founding Software Engineer, and now operate at lead scope: I mentor interns, own product decisions, and author PRDs and system-design reviews.

## Scope of Ownership
- Own backend architecture and product decisions for the Creative Hub on Django/PostgreSQL
- Sole author of the Creative Hub frontend (**Next.js 16 / React 19**) — every page, component, and design decision
- Review and merge the team's PRs; mentor 4 interns; write the PRDs and system-design reviews that set direction

## Creative Hub: Script-to-Screen Pipeline
- Built the screenplay pipeline end to end: upload (PDF/DOCX to FDX) → AI scene and shot breakdown → bulk previz image generation for an entire script in a few clicks → video generation
- Multi-provider generation across Azure OpenAI gpt-image-2, Together AI, and fal.ai Seedance, with cost-aware routing and credit pre-flight checks before expensive jobs run

## AI Systems
### LangGraph Multi-Agent Assistant
- Built a supervisor plus 5 specialist agents, streaming responses over WebSockets
- Added guardrails, per-user memory, and FAISS-based retrieval

### AI Film Risk Analyzer
- LangGraph classification across a 43-category risk registry with a deterministic scoring engine
- Human-in-the-loop edit-then-finalize approval flow
- Dual PDF reports (insurance and producer) and a golden-eval CI gate so model changes can't silently regress

### Studio Production Sheet Builder
- Manual-first production sheets: deterministic Pillow compositing of real approved character, location, and storyboard art
- Manual/AI toggle with manual as the default (zero AI credits) — giving creative directors control where the industry default is fully AI-generated sheets
- Chose deterministic compositing over generative rendering because image models re-imagine and distort real approved art

## Script Intelligence — intelligence.storyvord.com
- Built and deployed **Script Intelligence**: a nine-stage screenplay-analysis engine (FastAPI, Celery, Redis, Postgres, React on an AWS A10G GPU) that turns a Final Draft (.fdx) script into a scene-grounded ~13-section production and market report in 20–25 seconds
- Runs at under **$0.01 marginal compute per script**, with zero external LLM API spend at inference
- Trained its two in-house statistical models: an **XGBoost quantile-regression revenue predictor** (5th/50th/95th percentiles, conformal calibration, TreeSHAP attribution) over 42 engineered features on ~1,900 outcome-joined films, and a **k-means story-shape clusterer** over 2,232 normalized emotional arcs — with ~90% realized coverage of the stated revenue range on a time-held-out split
- Validated character-network extraction against the **Moviegalaxies** academic gold standard: edge F1 0.96 across 710 shared films
- Composed frozen open-source encoders (**BGE-M3**, **DistilRoBERTa** emotion, **GLiNER** NER) with deterministic, auditable graph/arithmetic layers — scene-ID provenance on every number, and confidence gates that refuse rather than fabricate
- Sole author: ~13k lines of Python, 18 design documents, and self-hosted **MLflow** with content-hashed dataset lineage; a full retrain costs under $1.50 of GPU time

## Platform Engineering
- **Billing**: Race-free credit billing using distributed locks and select_for_update, with a per-model, per-tier relational pricing schema behind credit wallets
- **Access Control**: Project-level RBAC across the platform
- **Async**: Celery queues per pipeline stage so generation workloads scale independently
- **Observability**: Grafana, Prometheus, Loki, and Promtail monitoring on Azure
    `,
    skills: [
      "Django",
      "FastAPI",
      "Next.js",
      "React",
      "LangGraph",
      "XGBoost",
      "MLflow",
      "AWS",
      "Azure",
      "Celery",
      "WebSockets",
      "FAISS",
      "Grafana",
      "Prometheus",
      "Docker",
      "CI/CD",
    ],
    type: "Full-Stack & AI Engineering",
    status: "Current",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  const openCertificate = (certificate) => {
    if (certificate) {
      window.open(certificate, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 md:p-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-400 pt-20">
        Experience
      </h1>
      <div className="relative w-full max-w-6xl">
        {/* Central Timeline Line - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

        <div className="relative space-y-8 md:space-y-16">
          {experiences
            .slice()
            .reverse()
            .map((exp, index) => (
              <div key={exp.id} className="w-full">
                {/* Mobile Layout - Single column */}
                <div className="block md:hidden w-full">
                  <ExperienceDiv
                    exp={exp}
                    index={index}
                    onViewDetails={() => openModal(exp)}
                    alignment="center"
                  />
                </div>

                {/* Desktop Layout - Timeline */}
                <div className={`hidden md:flex items-center w-full ${
                  index % 2 === 0
                    ? "justify-start pr-1/2"
                    : "justify-end pl-1/2"
                }`}>
                  {index % 2 === 0 ? (
                    <div className="flex items-center w-full">
                      <div className="w-1/2 pr-8">
                        <ExperienceDiv
                          exp={exp}
                          index={index}
                          onViewDetails={() => openModal(exp)}
                          alignment="right"
                        />
                      </div>
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 z-10 relative"></div>
                        {/* Arrow pointing from timeline to card */}
                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-8 h-0.5 bg-green-400"></div>
                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 translate-x-8 w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ) : (
                    <div className="flex items-center w-full">
                      <div className="w-1/2"></div>
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 z-10 relative"></div>
                        {/* Arrow pointing from timeline to card */}
                        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-8 h-0.5 bg-green-400"></div>
                        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 -translate-x-8 w-0 h-0 border-r-4 border-r-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <ExperienceDiv
                          exp={exp}
                          index={index}
                          onViewDetails={() => openModal(exp)}
                          alignment="left"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="glass-card border-2 border-green-400 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-green-400/30">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {selectedExperience.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <span className="font-semibold">
                    {selectedExperience.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{selectedExperience.location}</span>
                  <span className="text-gray-400">•</span>
                  <span>{selectedExperience.duration}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${selectedExperience.status === "Current"
                        ? "bg-green-600 text-white"
                        : "bg-gray-600 text-gray-300"
                      }`}
                  >
                    {selectedExperience.status}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
              {/* Skills Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="prose prose-invert prose-green max-w-none text-left">
                <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {selectedExperience.detailedDescription
                    .split("\n")
                    .map((line, index) => {
                      if (line.startsWith("# ")) {
                        return (
                          <h1
                            key={index}
                            className="text-2xl font-bold text-green-400 mt-6 mb-4 text-left"
                          >
                            {line.substring(2)}
                          </h1>
                        );
                      } else if (line.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-xl font-semibold text-green-300 mt-5 mb-3 text-left"
                          >
                            {line.substring(3)}
                          </h2>
                        );
                      } else if (line.startsWith("### ")) {
                        return (
                          <h3
                            key={index}
                            className="text-lg font-medium text-green-200 mt-4 mb-2 text-left"
                          >
                            {line.substring(4)}
                          </h3>
                        );
                      } else if (line.startsWith("- ")) {
                        const bulletText = line.substring(2);
                        return (
                          <li
                            key={index}
                            className="text-gray-300 mb-1 ml-4 text-left"
                          >
                            {bulletText
                              .split(/(\*\*[^*]+\*\*)/)
                              .map((part, partIndex) => {
                                if (
                                  part.startsWith("**") &&
                                  part.endsWith("**")
                                ) {
                                  return (
                                    <strong
                                      key={partIndex}
                                      className="text-green-300 font-semibold"
                                    >
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                          </li>
                        );
                      } else if (line.trim() === "") {
                        return <br key={index} />;
                      } else {
                        return (
                          <p
                            key={index}
                            className="text-gray-300 mb-3 text-left"
                          >
                            {line
                              .split(/(\*\*[^*]+\*\*)/)
                              .map((part, partIndex) => {
                                if (
                                  part.startsWith("**") &&
                                  part.endsWith("**")
                                ) {
                                  return (
                                    <strong
                                      key={partIndex}
                                      className="text-green-300 font-semibold"
                                    >
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                          </p>
                        );
                      }
                    })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-green-400/30">
              <div className="flex gap-3">
                {selectedExperience.certificate && (
                  <button
                    onClick={() =>
                      openCertificate(selectedExperience.certificate)
                    }
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300"
                  >
                    Download Certificate
                  </button>
                )}
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
