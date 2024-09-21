import { FC } from "react"
import { ToDoObj } from "../types"

interface IProps{
    item:ToDoObj,
    removeToDo:(id:number)=>void
}
export const ToDo:FC<IProps>= ({item, removeToDo}) =>{
    const handleRemove = () => {
        removeToDo(item.id)
    }
    return(
        <li>
            <p>{item.text}</p>
            <button type="button" onClick={handleRemove}>delete</button>
        </li>
    )
}