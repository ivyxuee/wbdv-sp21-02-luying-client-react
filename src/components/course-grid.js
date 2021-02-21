import React from 'react'

const CourseGrid = ({courses}) =>
  <div>
    <h2>Course Grid</h2>
    <div className="row">
    {
      courses.map(course =>
          <div className="col-4">
          <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
          </div>
      </div>)
    }
    </div>
  </div>


export default CourseGrid