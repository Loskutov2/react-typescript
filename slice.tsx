import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoObj } from "./src/types"

const initialState:ToDoObj[]=[]

const toDoSlice = createSlice({
    name:"ToDo's",
    initialState,
    reducers:{
        addToDo(state, action:PayloadAction<string>){//text:string
            state.push({id:Date.now(),text:action.payload})
        },
        removeToDo(state, action:PayloadAction<number>){//id:number
            state=state.filter(item=>item.id!==action.payload)
        }
    }
})