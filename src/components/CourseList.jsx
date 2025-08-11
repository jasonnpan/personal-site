import React from "react";

const CourseList = ({ courses, prefix, color }) => {
  return (
    <div className="text-xs pb-2">
      <span className={color}>{`${prefix}: [ `}</span>
      {courses.map((course, index) => (
        <React.Fragment key={course.href}>
          <a
            className="hover:underline"
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {course.name}
          </a>
          {index < courses.length - 1 && (
            <span className={color}>{" // "}</span>
          )}
        </React.Fragment>
      ))}
      <span className={color}>{" ]"}</span>
    </div>
  );
};

export default CourseList;
