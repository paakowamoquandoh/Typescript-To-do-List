import {v4 as uuidV4  } from "uuid";

type TaskType = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const todoList = document.querySelector<HTMLUListElement>('#list');
const todoForm = document.querySelector<HTMLFormElement>('#newTaskForm');
const todoInput = document.querySelector<HTMLInputElement>('#newTaskTitle');


todoForm?.addEventListener("submit", e => {
  e.preventDefault()
  
  if(todoInput?.value == "" || todoInput?.value == null) return

  const newTodo: TaskType = {
    id: uuidV4(),
    title: todoInput.value,
    completed: false,
    createdAt: new Date()
  }
  addTodoItem(newTodo)
})

function addTodoItem(todo: TaskType){
  
}