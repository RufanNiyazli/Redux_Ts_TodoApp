import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../Types/Todo";

const initialState: TodoInitialState = {
  todos: []
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
      state.todos=[...state.todos,action.payload]
    }
  }
});

export const {createTodo} = TodoSlice.actions;

export default TodoSlice.reducer;
