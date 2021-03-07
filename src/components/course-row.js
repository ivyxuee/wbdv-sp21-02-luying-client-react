import React, {useState} from "react"
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";

const CourseRow = (
    {
      lastModified,
      updateCourse,
      course,
      title,
      owner,
      deleteCourse
    }) =>{
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
      setEditing(false)
      var today = new Date()
      const date = (today.getMonth() + 1) + "/" + today.getDate() + "/"
          + today.getFullYear()
      const newCourse = {
        ...course,
        title: newTitle,
        lastModified: date
      }
      updateCourse(newCourse)
    }
    const saveDelete = (course) => {
      setEditing(false)
      deleteCourse(course)
    }
    return (
      <tr>
        <td >
          {!editing &&
            <Link to={`/courses/table/editor/${course._id}/modules`}>
              <i className="fas fa-file-alt"></i>
              {title}
            </Link>
          }
          {editing && <input
              onChange={(event) => setNewTitle(event.target.value)}
              value={newTitle}
              className="form-control"/>}
        </td>
        {/*<td className="list-title-col-content-1 d-none d-lg-table-cell">me</td>*/}
        <td className="d-none d-md-table-cell">{owner}</td>
        <td className="d-none d-lg-table-cell">{lastModified}</td>
        <td >
          <span className="float-right">
          {editing && <i className="fas fa-times"  style={{color:"rgb(217,83,79)"}} onClick={() => saveDelete(course)}></i>}
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
          {editing && <i onClick={() => saveTitle()} style={{color:"rgb(92,184,92)"}} className="fas fa-check"></i>}
          </span>
        </td>
      </tr>
    )
}

export default CourseRow