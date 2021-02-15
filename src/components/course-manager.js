import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

const CourseManager  = () =>
    <div>
      <h1>Course Manager</h1>
      <CourseTable/>
      <CourseGrid/>
      <CourseEditor/>
    </div>

export default CourseManager