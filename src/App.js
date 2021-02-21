import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./components/course-home"

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
      </div>
    </BrowserRouter>
  );
}

export default App;
