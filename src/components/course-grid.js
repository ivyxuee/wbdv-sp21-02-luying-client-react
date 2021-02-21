import React from 'react'
import CourseCard from "./course-card";
import {Link, Route} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse}) =>
  <div>
    <Link to="/courses/table">
      <i className="fas fa-2x fa-list float-right"></i>
    </Link>
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