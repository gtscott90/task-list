import './index.css';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"

function App() {
  // calling this peice of state tasks and the function used to updated tasks is setTasks
  // in the () of useState() goes the default version of the state
  // setting state here at the top level of the app (app.js) so that all things can access it
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Apointment",
      day: "Feb 5th",
      time: "2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Work Meeting",
      day: "Feb 6th",
      time: "9:30 am",
      reminder: false,
    },
    {
      id: 3,
      text: "Workout",
      day: "Feb 7th",
      time: "10:30 am",
      reminder: true,
    },
  ])
  
  return (
    <div className="container temp">
        <Header title="Task Tracker" />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
