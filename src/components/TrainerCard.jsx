import React from "react";
import ProfilePic from "../assets/pfp.png";
import ContactNavbar from "./ContactNavbar";
import CourseList from "./CourseList";

function TrainerCard() {
  return (
    <div className="mx-auto p-2 md:p-8">
      <div class="flex justify-center font-oxygen">
        <div class="bg-babyblue opacity-80 border-navyblue border-2 rounded-lg max-w-4xl mx-2 mt-12 p-6 sm:mx-8 md:p-8">
          {/* header */}
          <div class="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between">
            <div class="text-xl text-center">TRAINER CARD</div>
            <ContactNavbar />
          </div>

          {/* pfp + main intro */}
          <div class="flex flex-col md:flex-row">
            <img
              src={ProfilePic}
              alt={"me and pikachu :D"}
              class={
                "bg-tearblue h-full w-full md:h-32 md:w-32 aspect-square flex justify-center rounded-md border-navyblue border my-6 mr-8 md:flex-none"
              }
            />

            <div class="flex flex-col md:pt-5">
              <div class="text-xl">jason pan 🌱</div>
              <div class="text-xs pt-4 w-full md:w-2/3">
                3rd year <span class="text-darkblue">computer science</span>{" "}
                student @{" "}
                <a
                  class="hover:underline"
                  href="https://cs.uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uWaterloo
                </a>
              </div>
              <div class="text-xs pt-4 pb-12 md:pb-6">
                I'm a <span class="text-darkblue">software engineer</span> +{" "}
                <span class="text-forestgreen">design fanatic</span> who's
                passionate about crafting compelling user experiences. My
                experience is mainly in
                <span class="text-darkblue"> mobile</span> /
                <span class="text-forestgreen"> backend</span> engineering!
              </div>
            </div>
          </div>

          {/* relevant coursework */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">RELEVANT COURSEWORK 🌿</div>
            <CourseList
              prefix="current"
              color="text-darkblue"
              courses={[
                {
                  name: "intro to ai",
                  href: "https://uwflow.com/course/cs486",
                },
                {
                  name: "distributed systems",
                  href: "https://uwflow.com/course/cs454",
                },
                {
                  name: "databases",
                  href: "https://uwflow.com/course/cs348",
                },
                {
                  name: "ux design",
                  href: "https://uwflow.com/course/bet350",
                },
                {
                  name: "business tech + infra",
                  href: "https://uwflow.com/course/bet210",
                },
              ]}
            />
            <CourseList
              prefix="cs"
              color="text-forestgreen"
              courses={[
                {
                  name: "algorithms",
                  href: "https://uwflow.com/course/cs341",
                },
                {
                  name: "data structures",
                  href: "https://uwflow.com/course/cs240",
                },
                {
                  name: "object-oriented programming",
                  href: "https://uwflow.com/course/cs136",
                },
                {
                  name: "user interfaces",
                  href: "https://uwflow.com/course/cs349",
                },
                {
                  name: "operating systems",
                  href: "https://uwflow.com/course/cs350",
                },
              ]}
            />
            <CourseList
              prefix="fun"
              color="text-yellow-600"
              courses={[
                {
                  name: "intro to psych",
                  href: "https://uwflow.com/course/psych101",
                },
                {
                  name: "korean 1",
                  href: "https://uwflow.com/course/korea101r",
                },
                {
                  name: "korean 2",
                  href: "https://uwflow.com/course/korea102r",
                },
                {
                  name: "digital lives",
                  href: "https://uwflow.com/course/engl108d",
                },
              ]}
            />
          </div>

          {/* skills */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">SKILLS 🧃</div>
            <div class="text-xs pb-2">
              <span class="text-darkblue">languages: </span>
              c++, kotlin, swift, typescript, javascript, go, python, java, SQL, html, css
            </div>
            <div class="text-xs pb-2">
              <span class="text-forestgreen">frameworks: </span>
              react, react native, swiftUI/UIKit, node.js, next.js, tailwind, redux
            </div>
            <div class="text-xs pb-2">
              <span class="text-yellow-600">technologies: </span>
              firebase, mongoDB/noSQL, supabase, postgreSQL, aws, mode, datadog, snowflake, jenkins, git
            </div>
          </div>

          {/* interests */}
          <div class="flex flex-col pb-8 md:pb-6">
            <div class="text-sm pb-2">INTERESTS 🍉</div>
            <div class="text-xs pb-2">
              cooking, volleyball, tinkering on figma, watching travel vlogs
            </div>
          </div>

          {/* bonus stats section */}
          <div class="flex flex-col">
            <div class="text-xs pb-2">
              🥑 ADVENTURE STARTED: Sep 2022 @ uWaterloo
            </div>
            <div class="text-xs">💸 MONEY: $ broke.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div class=""></div>

export default TrainerCard;
