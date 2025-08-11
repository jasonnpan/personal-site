import React from "react";
import ExperienceCard from "./ExperienceCard";

import FaireLogo from "../assets/experience/fairewholesale_logo.png"
import MicroartLogo from "../assets/experience/microart_logo.png";
import DandelionLogo from "../assets/experience/dandelion_logo4.png";
import NoToxLogo from "../assets/experience/notox_app_logo.png";
import TrinityRoboticsLogo from "../assets/experience/trinity_robotics_logo.png";

function ExperienceSection() {
  return (
    <div class="font-oxygen pt-8">
      <div class="flex justify-center text-xl">EXPERIENCE 🌱</div>
      <ExperienceCard
        logo={FaireLogo}
        companyName={"FAIRE"}
        role={"Software Engineer Intern"}
        time={"summer 2025"}
      />
      <ExperienceCard
        logo={MicroartLogo}
        companyName={"MICROART SERVICES "}
        role={"Software Engineer Intern"}
        time={"fall 2024"}
      />
      <ExperienceCard
        logo={DandelionLogo}
        companyName={"DANDELION NETWORKS"}
        role={"Software Engineer Intern"}
        time={"winter 2024"}
      />
      <ExperienceCard
        logo={NoToxLogo}
        companyName={"NOTOX"}
        role={"Software Engineer Intern"}
        time={"summer 2023"}
      />
      <ExperienceCard
        logo={TrinityRoboticsLogo}
        companyName={"TRINITY ROBOTICS"}
        role={"Software Engineer Intern"}
        time={"summer 2023"}
      />
    </div>
  );
}

export default ExperienceSection;
