import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";

const ModuleList = (
    {
      myModules=[],
      createModule= () => alert("mmm"),
      deleteModule= (item) => alert("delete module!"),
      updateModule=(module) => alert("update")
    }) =>
    <div>
      <h2>Modules {myModules.length}</h2>
      <ul className="list-group">
        {myModules.map(module =>
        <li className="list-group-item">
          <EditableItem deleteItem={deleteModule} updateItem={updateModule} item={module}/>
        </li>
        )}
        <li className="list-group-item">
          <i onClick={createModule} className="fas fa-plus fa-2x"></i>
        </li>
      </ul>
    </div>

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
    updateModule: (item) => dispatch({type: "UPDATE_MODULE",module:item})
}

}
export default connect(stpm,dtpm)(ModuleList)