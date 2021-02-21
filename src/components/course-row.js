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
      const newCourse = {
        ...course,
        title: newTitle
      }
      updateCourse(newCourse)
    }
    return (
      <tr>
        <td>
          {!editing && <Link to="/courses/editor">{title}</Link>}
          {editing && <input
              onChange={(event) => setNewTitle(event.target.value)}
              value={newTitle}
              className="form-control"/>}
        </td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>

          <i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
          {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
        </td>
      </tr>
    )
}

export default CourseRow