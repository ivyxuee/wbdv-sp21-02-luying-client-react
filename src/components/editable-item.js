import React, {useState} from "react"

const EditableItem = (
    {
      deleteItem,
      updateItem,
      item={
        title: "Some title",
        _id:"1321"

  }}) => {
  const [editing,setEditing] = useState(false)
  const [cachedItem, setCachedItem] =useState(item)
  return (
      <>
        {!editing &&
        <>
          <a className="nav-link" href="#">{item.title}</a>
          <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
        </>
        }
        {editing &&
        <>
          <input
              onChange={
                (e) => setCachedItem({
                  ...cachedItem,
                  title: e.target.value
                })
                }
              value={cachedItem.title}/>
          <i onClick={() => {
            setEditing(false)
            updateItem(cachedItem)
          }} className="fas fa-check"></i>
          <i onClick={() => {
            deleteItem(item)
            setEditing(false)} } className="fas fa-times"></i>
        </>
        }
      </>
  )
}

export default EditableItem