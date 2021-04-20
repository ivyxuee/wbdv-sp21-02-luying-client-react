// const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const QUIZZES_URL = 'https://wbdv-node-server-luying.herokuapp.com/api/quizzes'
export const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
    .then(response => response.json())

const api = {
  findQuestionsForQuiz
}

export default api;
