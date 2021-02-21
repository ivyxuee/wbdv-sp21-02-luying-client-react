import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {
  state = {
  courses : [
    {title: "CS1", owner: "frank", lastModified: "2/3/45"},
    {title: "CS2", owner: "frank", lastModified: "2/3/45"},
    {title: "CS3", owner: "frank", lastModified: "2/3/45"},
    {title: "CS4", owner: "frank", lastModified: "2/3/45"}
  ]
}
  render() {
    return (
    <div>
      <h1>Course Manager</h1>
      <CourseTable courses = {this.state.courses}/>
      <CourseGrid courses = {this.state.courses}/>
      <CourseEditor/>
    </div>
    )
}
}

export default CourseManager