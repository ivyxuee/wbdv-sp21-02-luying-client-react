import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse,} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
  courses : [
    {title: "CS1", owner: "frank", lastModified: "2/3/45"},
    {title: "CS2", owner: "frank", lastModified: "2/3/45"},
    {title: "CS3", owner: "frank", lastModified: "2/3/45"},
    {title: "CS4", owner: "frank", lastModified: "2/3/45"}
  ]
  }

  componentDidMount() {
    courseService.findAllCourses().then(actualCourses => this.setState({courses: actualCourses}))
  }

  addCourse = () => {
    var today = new Date()
    const date = (today.getMonth() + 1) + "/" +  + today.getDate() +  "/" + today.getFullYear();
    const newCourse = {
      title:"test course",
      owner: "frank",
      lastModified: date
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }
  // deleteCourse = (courseToDelete) => {
  //     deleteCourse(courseToDelete._id)
  //     .then(status => {
  //       const newCourses = this.state.courses
  //       .filter(course => course !== courseToDelete)
  //       this.setState({
  //         courses: newCourses
  //       })
  //     })
    deleteCourse = (courseToDelete) => {
      courseService.deleteCourse(courseToDelete._id)
      .then(status => {
        this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.filter
          (course => course !== courseToDelete)
        }))
      })
    }

  render() {
    return (
    <div>
      <h1>Course Manager</h1>
      <button onClick={this.addCourse}>Add Course</button>
      <Route path={"/courses/table"}>
      <CourseTable
          deleteCourse={this.deleteCourse}
          courses = {this.state.courses}/>
      </Route>
      <Route path={"/courses/grid"}>
      <CourseGrid
          deleteCourse={this.deleteCourse}
          courses = {this.state.courses}/>
      </Route>
      {/*<Route path={"/courses/editor"}>*/}
      {/*<CourseEditor />*/}
      {/*</Route>*/}
      <Route path={"/courses/editor"} render={(props) => <CourseEditor {...props}/>}>
      </Route>
    </div>
    )
}
}

export default CourseManager