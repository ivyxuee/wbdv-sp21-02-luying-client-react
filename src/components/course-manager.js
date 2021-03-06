import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse,updateCourse} from "../services/course-service";

class CourseManager extends React.Component {
  newDate = () => {
    var today = new Date()
    const date = (today.getMonth() + 1) + "/" + today.getDate() + "/"
        + today.getFullYear()
    return date
  }
  state = {
  courses : [
  ],
  newCourse: {
    title: "",
    owner: "me",
    lastModified:this.newDate()
  }
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course).then(
        status => this.setState(
            (prevStatus) => ({
              ...prevStatus,
              courses: prevStatus.courses.map(c =>
                 c._id === course._id ? course : c
              )
            })
        )
    )
  }

  componentDidMount() {
    courseService.findAllCourses().then(actualCourses => this.setState({courses: actualCourses}))
  }

  onCourseChange = (e) => {
    const courseToAdd = this.state.newCourse
    var today = new Date()
    const date = (today.getMonth() + 1) + "/" + today.getDate() + "/"
        + today.getFullYear()
    this.setState({
      newCourse: {
        title: e.target.value,
        owner: "me",
        lastModified:date
      }
    })
  }


  addCourse = (event) => {
    let courseToAdd = this.state.newCourse
    var today = new Date()
    const date = (today.getMonth() + 1) + "/" + today.getDate() + "/"
        + today.getFullYear()
    if (this.state.newCourse.title.trim() === "") {
      courseToAdd = {
        title: "New Course",
        owner: "me",
        lastModified: date
      }
    }
    courseService.createCourse(courseToAdd)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))
    // this.state.courses.push(newCourse)
    // this.setState(this.state)
    this.setState({newCourse: {title: "", owner: "me",
        lastModified:date}})
    event.preventDefault()
  }

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
      <Route path={"/courses/table"} exact>
        <div className="wbdv-sticky-nav-bar">
          <div className="row">

            <div className="col-1">
                <Link to="/"><i className="fas fa-bars fa-2x"></i></Link>
            </div>

            <div className="col-lg-3 col-md-1 d-none d-lg-block" style={{size:"21px"}}>
              <h5>Course Manager</h5>
            </div>
            <div className="col-lg-7 col-md-10 col-sm-10 col-xs-1">
              <input className="form-control" placeholder="New Course Title" i
                     d="wbdv-new-course-title"
                     onChange={this.onCourseChange}
                     value={this.state.newCourse.title}/>
            </div>
            <div className="col-1">
              <i className="fas fa-plus-circle fa-2x float-right" style={{color: 'red'}} onClick={this.addCourse}></i>
            </div>
          </div>
        </div>
      </Route>
      {/*<button onClick={this.addCourse}>Add Course</button>*/}
      <Route path={"/courses/grid"} exact>
        <div className="wbdv-sticky-nav-bar">
          <div className="row">
            <div className="col-1">
              <Link to="/"><i className="fas fa-bars fa-2x"></i></Link>
            </div>
            <div className="col-lg-3 col-md-1 d-none d-lg-block" style={{size:"21px"}}>
              <h5>Course Manager</h5>
            </div>
            <div className="col-lg-7 col-md-10 col-sm-10 col-xs-1">
              <input className="form-control" placeholder="New Course Title" i
                     d="wbdv-new-course-title"
                     onChange={this.onCourseChange}
                     value={this.state.newCourse.title}/>
            </div>
            <div className="col-1">
              <i className="fas fa-plus-circle fa-2x float-right" style={{color: 'red'}} onClick={this.addCourse}></i>
            </div>
          </div>
        </div>
      </Route>
      {/*<Route path={"/courses/:layout/editor"}>*/}
      {/*  <div className="wbdv-sticky-nav-bar">*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-1">*/}
      {/*        <Link to="/"><i className="fas fa-bars fa-2x"></i></Link>*/}
      {/*      </div>*/}
      {/*      <div className="col-4">*/}
      {/*      </div>*/}
      {/*      <div className="col-6" style={{size:"21px"}}>*/}
      {/*        <h4>Course Editor</h4>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Route>*/}
      {/*<button onClick={this.addCourse}>Add Course</button>*/}
      <div className="wbdv-react-table">
      <Route path="/courses/table" exact>
      <CourseTable
          updateCourse={this.updateCourse}
          deleteCourse={this.deleteCourse}
          courses = {this.state.courses}/>
      </Route>
        </div>
      <div className="wbdv-react-grid">
      <Route path="/courses/grid" exact>
      <CourseGrid
          updateCourse={this.updateCourse}
          deleteCourse={this.deleteCourse}
          courses = {this.state.courses}/>
      </Route>
      </div>
      {/*<Route path={"/courses/editor"}>*/}
      {/*<CourseEditor />*/}
      {/*</Route>*/}
      <Route path={[
        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets",
        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics",
        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons",
        "/courses/:layout/editor/:courseId/modules"]}
             render={(props) => <CourseEditor {...props}/>}>
      </Route>
      <Route path="/courses/table" exact><a href="#">
        <i onClick={this.addCourse}
           className="fas fa-plus-circle fa-4x float-right"
           style={{color: 'red'}}></i>
      </a></Route>
      <Route path="/courses/grid" exact><a href="#">
        <i onClick={this.addCourse}
           className="fas fa-plus-circle fa-4x float-right"
           style={{color: 'red'}}></i>
      </a></Route>
    </div>
    )
}
}

export default CourseManager