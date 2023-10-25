import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/*creating links to nagivate to*/}
          <nav>
            <Link to="/" className="App-link">
              home
            </Link>
            <Link to="/students" className="App-link">
              students
            </Link>
            <Link to="/students/:id" className="App-link">
              studentDetail
            </Link>
            <Link to="/courses" className="App-link">
              courses
            </Link>
            <Link to="/courses/:id" className="App-link">
              courseDetail
            </Link>
          </nav>
          {/*All the routes with their endpoint*/}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to our administration system!</h1>
      <p>Here can you as a student, enrol for different courses.</p>
      <p>
        There are multiple courses, that may interest you. You can read more
        about them in course details.
      </p>
    </div>
  );
}

function Students() {}
function StudentDetail() {}
function Courses() {}
function CourseDetail() {}

export default App;
