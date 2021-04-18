import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./components/course-home"
// import QuizzesList from "./components/quizzestemp/quizzes-list";
// import Quiz from "./components/quizzestemp/quiz";
// import QuizAttempts from "./components/quizzestemp/quiz-attemps";
import Quiz from "./components/quizzes/quiz"
import Quizzes from "./components/quizzes/quizzes"
import QuizAttempts from "./components/quizzes/quiz-attempts";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true}>
          <HomePage/>
        </Route>
        <Route path="/courses">
          <CourseManager/>
        </Route>
        <Route path="/courses/:courseId/quizzes" exact={true}>
          <Quizzes/>
        </Route>
        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
          <Quiz/>
        </Route>
        <Route path='/courses/:courseId/quizzes/:quizId/attempts' exact={true}>
          <QuizAttempts/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
