import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import CourseRow from "../course-row";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        // fetch("http://localhost:4000/api/quizzes")
        //     .then(response => response.json())
        //     .then((quizzes) => {
        //         setQuizzes(quizzes)
        //     })
      quizService.findAllQuizzes().then((quizzes) => {setQuizzes(quizzes)})
    }, [])
    return(
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            <div className="container-fluid">
                              <table className='table'>
                                <tbody>
                                <tr>
                                  <td >
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                      {quiz.title}
                                    </Link>
                                  </td>
                                  <td >
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                      <i className="btn btn-primary">Start</i>
                                    </Link>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;