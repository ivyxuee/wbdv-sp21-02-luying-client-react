import React from 'react'
import {connect} from "react-redux"
import EditableItem from "./editable-item";

const LessonTabs = ({lessons=[
  {_id:9998, title:"Lesson A"},
  {_id:4565, title:"Lesson B"},
  {_id:6789, title:"Lesson C"}
]}) =>
    <div>
      <h2>Lessons</h2>
      <ul className="nav nav-tabs">
        {
          lessons.map(lesson =>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <EditableItem item={lesson}/>
                </a>
              </li>
          )
        }
      </ul>
    </div>

const stpm =(state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm =(state) =>({

})
export default connect(stpm,dtpm)(LessonTabs)