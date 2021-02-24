const initialState = {
    lessons:[
    {_id:9998, title:"Lesson F"},
    {_id:4565, title:"Lesson B"},
    {_id:6789, title:"Lesson C"}
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch (action.tyoe) {
    case "CREATE_MODULE":
    case "CREATE_MODULE":
    default:
      return state
  }
}

export default lessonReducer