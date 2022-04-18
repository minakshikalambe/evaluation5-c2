
import './App.css';
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import{useState} from "react"
function App() {
  const [show, setShow]=useState(true);
  return (
    <div className="App">
      {show ? <AddStudent/>:<ShowStudents/>}
      <button className="togglebtn" onClick={()=>{
        setShow(!show);
      }}>
        {show ? "Show Student" :"ADD Student"}
        Data
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;