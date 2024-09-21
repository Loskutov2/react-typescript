import { ChangeEvent, FormEvent, useState } from "react"

export const ToDoForm = ({addToDo}:{addToDo:(text:string)=>void}) => {
    const [text, setText] = useState<string>('')
    const handleAddToDo = (e:FormEvent) => {
        e.preventDefault()
        text&&addToDo(text)
        setText('')
    }
    return(
        <form onSubmit={handleAddToDo}>
            <input type="text" name="text" placeholder="text" value={text} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}}/>
            <button type="submit">create</button>
        </form>
    )
}