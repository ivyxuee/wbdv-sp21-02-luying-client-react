import React from 'react'
import {connect} from "react-redux"
import EditableItem from "./editable-item"
import {useParams} from "react-router-dom"

const LessonTabs = ({lessons=[
  {_id:9998, title:"Lesson A"},
  {_id:4565, title:"Lesson B"},
  {_id:6789, title:"Lesson C"}
]}) => {
  const {courseId, moduleId} = useParams();
  return(
      <div>
        <h2>Lessons {courseId} {moduleId}</h2>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <EditableItem
                        to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                        item={lesson}/>
                  </a>
                </li>
            )
          }
        </ul>
      </div>
  )}

const stpm =(state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm =(state) =>({

})
export default connect(stpm,dtpm)(LessonTabs)