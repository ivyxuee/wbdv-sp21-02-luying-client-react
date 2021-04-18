import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import QuizService from '../../services/quiz-service';

const QuizAttempts = () => {
  const {courseId, quizId} = useParams();
  const [attempts, setAttempts] = useState([]);
  useEffect(() => {
    QuizService.getQuizAttempts(quizId)
      .then(a => setAttempts(a));
  }, [quizId])
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Attemps History</h1>
      </div>
      <table className='table'>
        <thead>
        <tr>
          <th>sequence</th>
          <th>ID</th>
          <th>Score</th>
        </tr>
        </thead>
        <tbody>
        {
          attempts.map((attempt, count) =>
            <tr key={attempt._id}>
              <td>{count}</td>
              <td>
                {attempt._id}
              </td>
              <td>
                {attempt.score}
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default QuizAttempts;

// import React, {useState, useEffect} from 'react';
// import {Link, useParams} from 'react-router-dom';
// import QuizService from '../../services/quiz-service';
//
// const QuizResults = () => {
//   const {courseId, quizId} = useParams();
//   const [results, setResults] = useState([]);
//   useEffect(() => {
//     QuizService.getQuizAttempts(quizId)
//     .then(res => setResults(res));
//   }, [quizId])
//   return (
//       <div className='container-fluid'>
//         <div className='row'>
//           <Link to={`/courses/${courseId}/quizzes`} className='fas fa-arrow-left fa-2x mt-2'/>
//           <h1>Quiz Results</h1>
//         </div>
//         <table className='table'>
//           <thead>
//           <tr>
//             <th>Number</th>
//             <th>ID</th>
//             <th>Score</th>
//           </tr>
//           </thead>
//           <tbody>
//           {
//             results.map((r, num) =>
//                 <tr key={r._id}>
//                   <td>
//                     {num}
//                   </td>
//                   <td>
//                     {r._id}
//                   </td>
//                   <td>
//                     {r.score}
//                   </td>
//                 </tr>
//             )
//           }
//           </tbody>
//         </table>
//       </div>
//   );
// }
//
// export default QuizResults;