import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
      myModules,
      createModule= () => alert("mmm"),
      deleteModule= (item) => alert("delete module!"),
      updateModule=(module) => alert("update"),
      findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
  const {layout,courseId, moduleId} = useParams();
  console.log(layout)
  useEffect(() => {
    findModulesForCourse(courseId)
  }, [])
  return(
        <div>
          <h2>Modules</h2>
          <ul className="list-group">
            {myModules.map(module =>
            <li className={`list-group-item ${module._id === moduleId ? 'active': ""}`} key={module._id}>
              <EditableItem to={`/courses/${layout}/editor/${courseId}/modules/${module._id}/lessons`} deleteItem={deleteModule} updateItem={updateModule} item={module}/>
            </li>
            )}
            <li className="list-group-item">
              <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
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
    createModule: (courseId) => {
      moduleService.createModuleForCourse(courseId, {title: "New Module"})
      .then(theActualModule => dispatch({
        type: "CREATE_MODULE",
        module: theActualModule
      }))},
    deleteModule: (item) => moduleService.deleteModule(item._id)
    .then(status => dispatch({
      type: "DELETE_MODULE",
      moduleToDelete: item
    })),
    updateModule: (module) =>
        moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          module: module
        })),
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
      .then(theModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: theModules})
      )
    }
}

}
export default connect(stpm,dtpm)(ModuleList)