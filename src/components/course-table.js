import React from 'react'

export default class CourseTable extends React.Component{
  render() {
    return (
      <div>
        <h2>Course Table</h2>
        <table className='table'>
          <tr>
            <td>CS5610</td>
            <td>me</td>
            <td>1/1/2021</td>
            <td>
              <i className="fas fa-check"></i>
              <i className="fas fa-trash"></i>
              <i className="fas fa-edit"></i>
            </td>
          </tr>
          <tr>
            <td>CS5610</td>
            <td>me</td>
            <td>1/1/2021</td>
            <td>
              <i className="fas fa-check"></i>
              <i className="fas fa-trash"></i>
              <i className="fas fa-edit"></i>
            </td>
          </tr>
        </table>
      </div>
    )
  }
  
}