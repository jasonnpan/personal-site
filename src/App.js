import React from "react";
import TrainerCard from "./components/TrainerCard";
import ExperienceSection from "./components/ExperienceSection";
import UnderConstructionCard from "./components/UnderConstructionCard";
import BlobBackground from "./components/BlobBackground";

function App() {
  return (
    <div class="relative min-h-screen overflow-hidden">
      <BlobBackground />
      <div class="relative z-10">
        <TrainerCard />
        <ExperienceSection />
        <UnderConstructionCard />
      </div>
    </div>
  );
}

export default App;
