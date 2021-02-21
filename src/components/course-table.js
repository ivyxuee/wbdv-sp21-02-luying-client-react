import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component{
  constructor(props) {
    super(props);

  }
  addCourse = () => {
    var today = new Date()
    const date = (today.getMonth() + 1) + "/" +  + today.getDate() +  "/" + today.getFullYear();
    const newCourse = {
      title:"test course",
      owner: "frank",
      lastModified: date
    }
    this.props.courses.push(newCourse)
    this.setState(this.props)
  }

  render() {
    return (
      <div>
        <h2>Course Table</h2>
        <table className='table'>
          <button onClick={this.addCourse}>Add Course</button>
          {
            this.props.courses.map((course,ndx) =>
                <CourseRow
                    key={ndx}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}
                />)
          }
        </table>
      </div>
    )
  }
  
}