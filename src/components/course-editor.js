import React from 'react'

const CourseEditor = ({history}) =>
    <div className="">
      <i onClick={() => history.goBack()} className="fas fa-times float-right"></i>
      <div className="wbdv-nonesticky-nav-bar">
        <div className="row">
          {/*<div className="row" style="font-size: x-large">*/}
          <div className="col-1" style={{size:"x-large"}}>
            {/*<a href="../dashboard/dashboard.template.client.html"><i*/}
            {/*    className="fas fa-minus-circle"></i></a>*/}
          </div>
          <div className="col-3">
            <a className="nav-link active" aria-current="page"
               href="#">5610-WebDev</a>
          </div>
          {/*<div className="col-8" style="font-size: x-large">*/}
          <div className="col-8" style={{size:"x-large"}}>
            <ul className="nav  nav-pills nav-fill">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Build</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Themes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page"
                   href="#">Settings</a>
              </li>
              <a className="nav-link disabled" href="#" tabIndex="-1"
                 aria-disabled="true"><i
                  className="fas fa-plus-circle float-right"></i></a>

            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item active">Module1
                <i className="fas fa-trash-alt float-right"></i>
              </li>
              <li className="list-group-item">Module2<i
                  className="fas fa-trash-alt float-right"></i></li>
              <li className="list-group-item">Module3<i
                  className="fas fa-trash-alt float-right"></i></li>
              <li className="list-group-item">Module4<i
                  className="fas fa-trash-alt float-right"></i></li>
              <li className="list-group-item">Module5<i
                  className="fas fa-trash-alt float-right"></i>
              </li>
              <li className="list-group-item"><i
                  className="fas fa-plus-circle float-right"></i></li>

            </ul>
          </div>
          <div className="col-8">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Topic1

                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#">Topic2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1"
                   aria-disabled="true">Topic4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1"
                   aria-disabled="true"><i
                    className="fas fa-plus-circle float-right"></i></a>
              </li>
            </ul>

            Content intentionally left blank
          </div>
        </div>
      </div>

    </div>



export default CourseEditor