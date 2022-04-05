import './App.css';
import DataComp from './Component/DataComp';
import {useState, useEffect, useRef} from 'react';
import CompleteComp from './Component/CompleteComp';

const completedTask = [];

function App() {
  const [item, setItem] = useState([]);
  const [completeData, setCompleteData] = useState(completedTask);
  let [text, setText] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(()=> {
      if(error!=="") setError("");   
    },5000)
  },[error])

  useEffect(() => {
    inputRef.current.focus();
    })

  const handleChange = e => {
    setText(e.target.value);
  }

  const handleAdd = e => {
    checkError();
    if(text!=="") {
      item.push(text);
      setText("");
    }
  }

  const checkError = () => {
    if(text === "") setError("Please Enter Task");
  }

  const handleDelete = id => {
    const oldItems = [...item];
    const newItems = oldItems.filter((element, i) => {
      return id !== i;
    })
    setItem(newItems);
  }

  const handleDone = id => {
    const data = item[id];
    completeData.push(data);
    handleDelete(id);
    //setCompleteData([...completeData,data]);
    //console.log("completeData ",completeData);
  }

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-9 mx-auto text-white shadow-lg">
          <h1 className="text-center">Today's Plan</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" ref={inputRef} className="form-control" placeholder="Add Task Here" value={text} onChange={handleChange} />
            </div>
            <div className="col-2">
              <button className="btn btn-success" onClick={handleAdd} >Add</button>
            </div>
            <li className="text-danger">{error}</li>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                <DataComp p={item} sendDelete={handleDelete} sendDone={handleDone}/>
              </ul>
            </div>
          </div>
        </div>

      </div>
      

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-9 mx-auto text-white shadow-lg">
            <h1 className="text-center">Completed Task</h1>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
               <CompleteComp doneData={completeData}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
