import React from 'react'
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse}) =>
  <div>
    <h2>Course Grid</h2>
    <div className="row">
    {
      courses.map((course,ndx) =>
        <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={ndx}
        />
      )
    }
    </div>
  </div>


export default CourseGrid