import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetService, {findWidgetsForTopic} from "../../../services/widget-service";
import {useParams} from "react-router-dom";
import topicService from "../../../services/topic-service";
import {connect} from "react-redux";
import EditableItem from "../../editable-item";

const WidgetList = ({
  widgets,
  setWidgetToEmpty,
  findWidgetsForTopic,
  updateWidget,
  deleteWidget,
  createWidgetForTopic
}) => {
  // TODO: move state management to widgets-reducer
  const {layout,courseId,moduleId, lessonId ,topicId} = useParams();
  // const [widgets, setWidgets] = useState([])
  const [editingWidget, setEditingWidget] = useState({})
  const [editing, setEditing] = useState(false)
  useEffect(() => {
    // TODO: move server communication to widget-service
    // fetch("http://localhost:8080/api/widgets")
    if (topicId != "undefined" && typeof topicId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined" && lessonId != "undefined" && typeof lessonId != "undefined") {
      // widgetService.findWidgetsForTopic(topicId).then()
      findWidgetsForTopic(topicId)
      // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      // .then(response => response.json())
      // .then(widgets => setWidgets(widgets))
    }
    else {
      setWidgetToEmpty();
    }

  }, [topicId,lessonId, moduleId])
  // const createWidgetForTopic = () => {
  //   fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
  //     method: "POST",
  //     body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(actualWidget => {
  //     setWidgets(widgets => ([...widgets, actualWidget]))
  //   })
  // }
  // const deleteWidget = (wid) => {
  //   fetch(`http://localhost:8080/api/widgets/${wid}`, {method: "DELETE",})
  //   .then(response => {setWidgets((widgets) => widgets.filter(w => w.id !== wid)); console.log(widgets)})
  // }
  // const updateWidget = (wid, widget) => {
  //   fetch(`http://localhost:8080/api/widgets/${wid}`, {
  //     method: "PUT",
  //     body: JSON.stringify(widget),
  //     headers: {'content-type': 'application/json'}
  //   }
  //   ).then(response => {setWidgets((widgets) => widgets.map(w => w.id!== wid ? w : widget)); setEditingWidget({})})
  // }
  return(
      <div>
        <i onClick={() => createWidgetForTopic(topicId, lessonId, moduleId)} className="fas fa-plus fa-2x float-right"></i>
        <h2>Widget List ({widgets.length}
        {/*{editingWidget.id} {editing.toString()}*/}
        )</h2>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {/*{*/}
                  {/*  editingWidget.id === widget.id &&*/}
                  {/*      <>*/}
                  {/*        <i onClick={() => {updateWidget(widget.id, editingWidget)}} className="fas fa-2x fa-check float-right"></i>*/}
                  {/*        <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>*/}
                  {/*      </>*/}
                  {/*}*/}
                  {/*{*/}
                  {/*  editingWidget.id !== widget.id &&*/}
                  {/*      <>*/}
                  {/*        <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>*/}
                  {/*      </>*/}
                  {/*}*/}
                  {
                    widget.type === "HEADING" &&
                    <HeadingWidget to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                        editing={editingWidget.id === widget.id}
                        widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                  }
                  {
                    widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        editing={editingWidget.id === widget.id}
                        widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                  }
                </li>
            )
          }
        </ul>
        {/*{JSON.stringify(widgets)}*/}
      </div>
  )
}

const stpm =(state) => ({
  widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => {
  return {
    deleteWidget: (wid) => widgetService.deleteWidget(wid).then(
        status => dispatch({
          type: "DELETE_WIDGET",
          wid: wid
        })
    ),
    // deleteTopic: (topic) => topicService.deleteTopic(topic._id)
    // .then(status => dispatch({
    //   type: "DELETE_TOPIC",
    //   topic:topic
    // })),
    updateWidget: (wid, widget) => widgetService.updateWidget(wid, widget).then(
        status => dispatch({
          type: "UPDATE_WIDGET",
          widget: widget
        })
    ),
    // updateTopic: (topic) =>
    //     topicService.updateTopic(topic._id, topic)
    //     .then(status => dispatch({
    //       type: "UPDATE_TOPIC",
    //       topic: topic
    //     })),
    createWidgetForTopic: (tid, lessonId, moduleId) => {
      if (!(lessonId != "undefined" &&
          typeof lessonId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined" && tid != "undefined" &&
          typeof tid != "undefined") )
      {
        alert("Invalid operation. You have to select topic first!")
      } else {
        widgetService.createWidget(tid,{type: "HEADING", size: 1, text: "New Widget"}).then(
            theActualWidget => dispatch({
              type: "CREATE_WIDGET",
              widget: theActualWidget
            })
        )
      }
    },
    // createTopicForLesson: (lessonId, moduleId) => {
    //   if (!(lessonId != "undefined" &&
    //       typeof lessonId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined")){
    //     alert("Invalid operation. You have to select lesson first!")
    //   } else {topicService.createTopicForLesson(lessonId, {title: "New Topic"})
    //   .then(theActualTopic => dispatch({
    //     type: "CREATE_TOPIC",
    //     topic: theActualTopic
    //   }))}},

    // findTopicsForLesson: (lessonId) => {
    //   topicService.findTopicsForLesson(lessonId)
    //   .then(topics => dispatch({
    //     type: "FIND_TOPIC_FOR_LESSON",
    //     topics : topics})
    //   )
    // },
    findWidgetsForTopic: (topicId) => {
      widgetService.findWidgetsForTopic(topicId).then(

          widgets => {
            console.log(widgets);
            console.log("1");
            dispatch({
            type:"FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets
          })
          }
      )
    },
    setWidgetToEmpty: () => dispatch({
      type: "CLEAN_WIDGET"
    })
  }
}

export default connect(stpm, dtpm)(WidgetList);