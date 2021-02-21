import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>Course Table</h2>
        <table className='table'>
          <tbody>
          {
            this.props.courses.map((course,ndx) =>
                <CourseRow
                    deleteCourse={this.props.deleteCourse}
                    key={ndx}
                    course={course}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}
                />)
          }
          </tbody>
        </table>
      </div>
    )
  }
  
}