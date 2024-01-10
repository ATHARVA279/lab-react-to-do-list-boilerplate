import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

export default class Todo extends React.Component{
    constructor() {
      super()
    
      this.state = {
            textValue:"",
            todolist:[]
      }
    }



    render(){
        let {textValue,todolist} = this.state

        let handleChange=(event)=>{
            this.setState({textValue:event.target.value})
        }

        let handleClick=()=>{
            this.setState({todolist:[...todolist,textValue]})
            this.setState({textValue:""})
        }

        let handleDelete=(index)=>{
            let deletedArr = todolist.filter((el,i)=>i!==index)

            this.setState({todolist:deletedArr})
        }

        let handleUpdate=(index)=>{
            let newValue = prompt("Put a new Value")
            let updateArr = todolist.map((el,i)=>{
                if(i==index){
                    return newValue
                }
                return el
            })

            this.setState({todolist:updateArr})
        }
        
        return(
            <>
                <div className="main">
                    <div className="todobox">
                        <div className="box1">
                            <input type="text" value={textValue} onChange={handleChange} placeholder="Add your task"/>
                            <button className="button-24" onClick={handleClick}>Add</button>
                        </div>
                        <div className="box2">
                            {todolist.map((el,i)=>(
                                <div className="list" key={i}>
                                    <div className="flex-1">
                                        <p>{el}</p>
                                    </div>
                                    <div className="flex">
                                        <button className="button-24" onClick={()=>handleUpdate(i)}><FiEdit /></button>
                                        <button className="button-24" onClick={()=>handleDelete(i)}><MdDeleteForever /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}
