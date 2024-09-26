import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {
  return (
    <div class="font-oxygen pt-8">
      <div class="flex justify-center text-xl">EXPERIENCE 🌱</div>
      <ExperienceCard
        companyName={"MICROART SERVICES "}
        role={"Software Engineer Intern"}
        time={"current"}
      />
      <ExperienceCard
        companyName={"DANDELION NETWORKS"}
        role={"Mobile Developer Intern"}
        time={"winter 2024"}
      />
      <ExperienceCard
        companyName={"NOTOX"}
        role={"Software Engineer Intern"}
        time={"summer 2023"}
      />
      <ExperienceCard
        companyName={"TRINITY ROBOTICS"}
        role={"Software Engineer Intern"}
        time={"summer 2023"}
      />
    </div>
  );
}

export default ExperienceSection;
