import React,{useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "./editable-item"
import {useParams} from "react-router-dom"
import lessonService, {createLessonForModule} from "../services/lesson-service"

const LessonTabs = ({
  lessons=[
      {_id:9998, title:"Lesson A"},
      {_id:4565, title:"Lesson B"},
      {_id:6789, title:"Lesson C"}
      ],
  findLessonsForModule,
  createLessonForModule
}) => {
  const {courseId, moduleId,lessonId} = useParams();
  useEffect(() => {
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    }
  }, [moduleId])
  return(
      <div>
        <h2>Lessons{moduleId}</h2>
        <ul className="nav nav-pills">
          {
            lessons.map(lesson =>
                <li className="nav-item active">
                    <EditableItem
                        to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                        item={lesson}
                        active={lesson._id === lessonId}/>
                </li>
            )
          }
          <li>
            <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
          </li>
        </ul>
      </div>
  )}

const stpm =(state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm =(dispatch) =>({
    findLessonsForModule: (moduleId) => {
      console.log(moduleId)
      lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
        type: "FIND_LESSONS",
        lessons: lessons
      }))
    },
    createLessonForModule:(moduleId) => {
      alert("create new lesson!")
      lessonService.createLessonForModule(moduleId, {title: "New Lesson"}).then(lesson => dispatch({
        type: "CREATE_LESSON",
        lesson: lesson
      }))
    }
})
export default connect(stpm,dtpm)(LessonTabs)