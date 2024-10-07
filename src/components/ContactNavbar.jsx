import React from "react";
import Resume from "../pdfs/JasonPanResume.pdf";

function ContactNavbar() {
  return (
    <div class="bg-tearblue flex gap-4 px-6 py-2 rounded-md border-navyblue border text-xs w-fit justify-center">
      <a
        class="hover:underline cursor-pointer"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
      <div class="">|</div>
      <a
        class="hover:underline cursor-pointer"
        href="https://github.com/jasonnpan"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      <div class="">|</div>
      <a
        class="hover:underline cursor-pointer"
        href="https://www.linkedin.com/in/jasonpann/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
      <div class="">|</div>
      <a
        class="hover:underline cursor-pointer"
        href="mailto:j7pan@uwaterloo.ca"
      >
        email
      </a>
    </div>
  );
}

export default ContactNavbar;
