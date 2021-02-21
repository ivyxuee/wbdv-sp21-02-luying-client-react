import React,{useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course, updateCourse}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)
  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return (<div className="col-sm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card" >
        <img src="https://i.ibb.co/3Y5q2j7/start-small.png"
             alt="start-small"
             border="0"/>
        <div className="card-body">
          {
            !editing &&
            <Link to="/courses/editor" className="card-title">{course.title}</Link>
          }
          {
            editing &&
            <input
                onChange={(event)=> setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>
          }
          {/*<h5 className="card-title">{course.title}</h5>*/}
          <p className="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <Link to="/courses/editor" className="btn btn-primary">{course.title}</Link>
          {/*<i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>*/}
          <span className="float-right">
          {editing && <i className="fas fa-times"  style={{color:"rgb(217,83,79)"}} onClick={() => deleteCourse(course)}></i>}
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} style={{color:"rgb(92,184,92)"}} className="fas fa-check"></i>}
          </span>
        </div>
      </div>
    </div>)
}

export default CourseCard