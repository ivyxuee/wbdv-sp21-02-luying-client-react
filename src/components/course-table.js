import React from 'react'
import CourseRow from "./course-row";
import {Link, Route} from "react-router-dom";
import './components.css';

export default class CourseTable extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
      <div className="container-fluid">
        <table className='table'>
          <thead>
          <tr>
            <th >Title</th>
            <th className="d-none d-md-table-cell">Owned by</th>
            <th className="d-none d-lg-table-cell">Last Modified</th>
            <th>
              <span className="float-right">
                <i className="fas fa-folder fa-2x"></i>
                {/*<i className="fas fa-sort-alpha-down fa-2x "></i>*/}
                <i className="fas fa-sort-alpha-down fa-2x "></i>
                <Link to="/courses/grid">
                  <i className="fas fa-2x fa-th float-right"></i>
                </Link>
             </span>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.courses.map((course,ndx) =>
                <CourseRow
                    updateCourse={this.props.updateCourse}
                    deleteCourse={this.props.deleteCourse}
                    key={course._id}
                    course={course}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}
                />)
          }
          </tbody>
        </table>
      </div>
        </div>
    )
  }
  
}