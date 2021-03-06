import React,{useEffect,useState} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item"
import {useParams} from "react-router-dom"
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";

const LessonTabs = ({
  lessons=[
      ],
  findLessonsForModule,
  createLessonForModule,
  deleteLesson,
  updateLesson,
  setLessonsToEmpty
}) => {
  const {layout,courseId, moduleId,lessonId} = useParams();
  const [moduleName, setModuleName] = useState({title:""})
  console.log(layout)
  useEffect(() => {
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId);
      moduleService.findModuleById(moduleId).then(module => setModuleName({title:module.title}))
    } else {
      setLessonsToEmpty(moduleId)
    }
  }, [moduleId, courseId])

  // useEffect(() => {moduleService.findModuleById(moduleId).then(module => setModuleName({title:module.title}))}
  //     , [moduleId])
  return(
      <div>
        {moduleName.title != "" && <><h2>{moduleName.title}'s lessons</h2></>}
        {moduleName.title === "" && <><h2>Please select module</h2></>}
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li className="nav-item active" key={lesson._id}>
                    <EditableItem
                        to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lesson._id}/topics`}
                        deleteItem={deleteLesson}
                        updateItem={updateLesson}
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

const dtpm =(dispatch) => {
  return {
    findLessonsForModule: (moduleId) => {
      console.log(moduleId)
      lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
        type: "FIND_LESSONS",
        lessons: lessons
      }))
    },
    createLessonForModule: (moduleId) => {

      if(!(moduleId !== "undefined" && typeof moduleId !== "undefined")) {
        alert("Invalid operation. You have to select the module first!")
      }
      else{
        alert(`create new lesson!${moduleId}`)
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"}).then(
          lesson => dispatch({
            type: "CREATE_LESSON",
            lesson: lesson
          }))}
    },
    deleteLesson: (lesson) => {
      alert("delete existed lesson!")
      lessonService.deleteLesson(lesson._id).then( status => dispatch(
          {
            type: "DELETE_LESSON",
            lessonToDelete: lesson
          }
      ))
    },
    updateLesson: (lesson) => {
      lessonService.updateLesson(lesson._id, lesson).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: lesson
          })
      )
    },
    setLessonsToEmpty: (lessonId) => {
      dispatch({
        type: "CLEAN_LESSONS"
      })
    }
  }
}
export default connect(stpm,dtpm)(LessonTabs)