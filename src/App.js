import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./components/course-home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

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
          <QuizzesList/>
        </Route>
        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
          <Quiz/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
