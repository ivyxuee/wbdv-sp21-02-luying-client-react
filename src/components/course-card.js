import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course}) =>

    <div className="col-sm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <Link to="/courses/editor" className="btn btn-primary">{course.title}</Link>
          <i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>
        </div>
      </div>
    </div>

export default CourseCard