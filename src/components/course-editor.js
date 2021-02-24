import React from 'react'
import {BrowserRouter, useParams} from "react-router-dom";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";

// const store = createStore(moduleReducer)


const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer
})
const store = createStore(reducer)
const CourseEditor = ({history}) => {
  const {courseId} = useParams();
  return(
      <Provider store={store}>
        <div >
          <i onClick={() => history.goBack()} style={{color:"red"}} className="fas fa-times fa-2x float-left"></i>
          {courseId}
          <div className="wbdv-nonesticky-nav-bar">
            <div className="row">
              <div className="col-1" style={{size:"x-large"}}>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <ModuleList/>
            </div>
            <div className='col-8'>
              <LessonTabs/>
            </div>
          </div>
        </div>
      </Provider>
  )}



export default CourseEditor