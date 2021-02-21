import React from "react"
import {Link} from "react-router-dom";

const CourseRow = ({lastModified,course, title, owner,deleteCourse}) =>
    <tr>

      <td>
        <Link to="/courses/editor">{title}</Link>
      </td>
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td>
        <i className="fas fa-check"></i>
        <i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>
        <i className="fas fa-edit"></i>
      </td>
    </tr>

export default CourseRow