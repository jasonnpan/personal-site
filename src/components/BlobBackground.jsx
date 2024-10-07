import React from "react";
import Blob1 from "../assets/Blob1.png";

function BlobBackground() {
  return (
    <div class="overflow-hidden">
      <img
        src={Blob1}
        alt="Blob 1"
        class="absolute opacity-70 top-[-35vh] right-[-50vw] md:top-[-35vh] md:right-[-50vw] w-[120vw] h-[100vh] object-fit z-0 select-none pointer-events-none animate-pulse"
        oncontextmenu="return false;"
      />
      <img
        src={Blob1}
        alt="Blob 1"
        class="absolute top-[90vh] left-[-30vw] md:top-[30vh] md:left-[-30vw] w-[120vw] h-[120vh] object-fit z-0 select-none pointer-events-none animate-pulse"
        oncontextmenu="return false;"
      />
      {/* <img
        src={Blob1}
        alt="Blob 1"
        class="absolute opacity-70 top-[150vh] right-[-25vw] md:top-[100vh] md:right-[-30vw] w-[80vw] h-[80vh] object-fit z-0 select-none pointer-events-none animate-pulse"
        oncontextmenu="return false;"
      /> */}
    </div>
  );
}

export default BlobBackground;
