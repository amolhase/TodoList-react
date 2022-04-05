import React from 'react';


const DataComp = (props) => {
    const taskData=props.p;
    return (
        <>
    {
     taskData.length ? taskData.map((value,i) => {
        return (
        <React.Fragment key={i}>
        <li className="shadow p-2 my-2 col-sm-7">{value}</li>
        <button className="btn btn-danger my-2 col-sm-1 offset-1" onClick={() => {props.sendDelete(i)}}>X</button>
        <button className="btn btn-success my-2 col-sm-1 offset-1"  onClick={() => {props.sendDone(i)}}>✓</button>
        </React.Fragment>
        )
    }): <li className="shadow p-2 my-2 col-sm-9">No Data to display</li>
        
    }
    </>
    )
}

export default DataComp;