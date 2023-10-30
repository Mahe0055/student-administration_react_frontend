import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
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
            <Link to="/studentDetail" className="App-link">
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

function Students() {
  //Left side, creating a state variable called 'students'. Right side calling state with empty array as deafault value
  const [students, setStudents] = useState([]);

  //useEffect fetching data with axios.
  useEffect(() => {
    axios
      //This endpoint contains all students.
      .get("http://localhost:8080/students")
      .then((response) => {
        console.log(response.data);
        //when data gets fetched, the response will be put in the default empty array.
        setStudents(response.data);
      });
  }, []);

  //The return is a ordered list of students, using the url that shows all students.
  return (
    <div>
      <h1>Here is a list of all students</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`} className="Students-link">
              {student.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StudentDetail() {
  return (
    <div>
      <h1>Here are the student details.</h1>
    </div>
  );
}

function Courses() {
  //Left side, creating a state variable called 'courses'. Right side calling state with empty array as deafault value
  const [courses, setCourses] = useState([]);

  //useEffect fetching data with axios.
  useEffect(() => {
    axios
      //This endpoint contains all courses.
      .get("http://localhost:8080/courses")
      .then((response) => {
        console.log(response.data);
        //when data gets fetched, the response will be put in the default empty array.
        setCourses(response.data);
      });
  }, []);

  //The return is a ordered list of courses, using the url that shows all courses.
  return (
    <div>
      <h1>Here is a list of all courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`} className="Courses-link">
              {course.courseName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CourseDetail() {
  return (
    <div>
      <h1>Here are the course details.</h1>
    </div>
  );
}

export default App;
