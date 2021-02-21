import React from 'react'

const CourseEditor = ({history}) =>
    <div>
      <i className="fas fa-arrow-left"></i>
      <h2>Course Editor</h2>
      <i onClick={() => history.goBack()} className="fas fa-times float-right"></i>
    </div>

export default CourseEditor