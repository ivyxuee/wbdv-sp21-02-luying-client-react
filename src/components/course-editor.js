import React from 'react'
import {BrowserRouter, useParams, Link, Route} from "react-router-dom";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../reducers/modules-reducer";
import topicReducer from "../reducers/topics-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

// const store = createStore(moduleReducer)


const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})
const store = createStore(reducer)
const CourseEditor = ({history}) => {
  console.log(history.location.pathname)
  const {layout,courseId, moduleId} = useParams();
  console.log("edit layout")
  return(
      <Provider store={store}>
        <div >
          <a href={`/courses/${layout}`}  style={{color:"red"}} className="fas fa-times fa-2x float-left"></a>
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
              <TopicPills/>
            </div>
          </div>
        </div>
      </Provider>
  )}



export default CourseEditor