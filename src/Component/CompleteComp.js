import React,{useState} from 'react';


const CompleteComp = (props) => {
    let [data, setData] = useState([]);
    data = props.doneData;
    //console.log("completecomp data ",data);
    //console.log("completedata comp ",data);
   return (
       <>
       {
           data.length ? data.map((value,i) => {
            return (
            <React.Fragment key={i}>
            <li className="shadow p-2 my-2 col-sm-7">{value}</li>
            </React.Fragment>
            )
        }): <li className="shadow p-2 my-2 col-sm-9">No Task completed yet</li>
       }
       </>
   )
}

export default CompleteComp;