import React from 'react'
import CourseCard from "./course-card";
import {Link, Route} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse,updateCourse}) =>{
  // const [newTitle, setNewTitle] =
  // const saveTitle = () => {
  //   setEditing(false)
  //   var today = new Date()
  //   const date = (today.getMonth() + 1) + "/" + today.getDate() + "/"
  //       + today.getFullYear()
  //   const newCourse = {
  //     ...course,
  //     title: newTitle,
  //     lastModified: date
  //   }
  //   updateCourse(newCourse)
  // }
    return (<div>
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-4  d-none d-md-block"><h5>Recent Documents</h5></div>
      <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
        <h5>Owned by me <i className="fas fa-angle-down"></i></h5>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
        <span className="float-right">
          <i className="fas fa-folder fa-2x "></i>
          <i className="fas fa-sort-alpha-down fa-2x "></i>
          <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
          </Link>
        </span>
      </div>
    </div>

    <div className="row">
    {
      courses.map((course,ndx) =>
        <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={ndx}
            updateCourse={updateCourse}
        />
      )
    }
    </div>
  </div>
    )}


export default CourseGrid