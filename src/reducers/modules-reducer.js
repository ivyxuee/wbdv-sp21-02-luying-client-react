const initialState = {
  modules: [
    {_id:123, title:"Module 123"},
    {_id:456, title:"Module 456"},
    {_id:789, title:"Module 789"}
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      alert("create a new module")
      const newState1 =  {
       modules:[ ...state.modules,
         {
           title: "New module",
          _id: (new Date()).getTime()
         }]
      }
      return newState1
    case "DELETE_MODULE":
      const newState2 = {
       modules: state.modules.filter(module => {
         if (module._id === action.moduleToDelete._id) {
           return false
         } else {
           return true
         }
       })
      }
      return newState2
    case "UPDATE_MODULE":
      const newState3 = {
        modules: state.modules.map(m => {
          if (m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
      return newState3
    default:
      return state
  }
}

export default moduleReducer