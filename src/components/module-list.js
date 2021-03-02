import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom"
import moduleService from "../services/module-service";

const ModuleList = (
    {
      myModules=[],
      createModule= () => alert("mmm"),
      deleteModule= (item) => alert("delete module!"),
      updateModule=(module) => alert("update"),
      findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
  const {courseId} = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
  }, [])
  return(
        <div>
          <h2>Modules {myModules.length} {courseId}</h2>
          <ul className="list-group">
            {myModules.map(module =>
            <li className="list-group-item">
              <EditableItem to={`/courses/editor/${courseId}/${module._id}`} deleteItem={deleteModule} updateItem={updateModule} item={module}/>
            </li>
            )}
            <li className="list-group-item">
              <i onClick={createModule} className="fas fa-plus fa-2x"></i>
            </li>
          </ul>
        </div>
    )
}

const stpm = (state) => {
  return{
    myModules: state.moduleReducer.modules
  }
}
const dtpm = (dispatch) => {
  return {
    // createModule :() => dispatch({type: "CREATE_MODULE"})
    createModule: () => dispatch({type: "CREATE_MODULE"}),
    deleteModule: (item) => dispatch({type: "DELETE_MODULE",moduleToDelete:item}),
    updateModule: (item) => dispatch({type: "UPDATE_MODULE",module:item}),
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId).then(
          theModules => dispatch({type: "FIND_MODULES_FOR_COURSE", modules: theModules})
      )
    }
}

}
export default connect(stpm,dtpm)(ModuleList)