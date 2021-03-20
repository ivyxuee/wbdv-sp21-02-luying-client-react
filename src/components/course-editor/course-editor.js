import React, {useEffect,useState} from 'react'
import {BrowserRouter, useParams, Link, Route} from "react-router-dom";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/modules-reducer";
import topicReducer from "../../reducers/topics-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import widgetReducer from "../../reducers/widgets-reducer";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "./widgets/widget-list";
import {findCourseById} from "../../services/course-service";

// const store = createStore(moduleReducer)


const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer
})
const store = createStore(reducer)
const CourseEditor = ({history}) => {
  // console.log(history.location.pathname)
  const {layout,courseId, moduleId} = useParams();
  const [courseName, setCourseName] = useState({title: ""})
  useEffect(() => {
    findCourseById(courseId).then(course => {setCourseName({title:course.title})})
  }, [courseId])
  return(
      <Provider store={store}>
        <div >
          <h2>{courseName.title} Course Editor</h2>
          <a href={`/courses/${layout}`}  style={{color:"red"}} className="fas fa-times fa-2x float-left"></a>
          <div className="row">
            <div className="col-4">
              <ModuleList/>
            </div>
            <div className='col-8'>
              <LessonTabs/>
              <br/>
              <TopicPills/>
              <br/>
              <WidgetList/>
            </div>
          </div>
        </div>
      </Provider>
  )}



export default CourseEditor