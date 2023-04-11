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

const todos: TaskType[] = loadTodos()
todos.forEach(addTodoItem)

todoForm?.addEventListener("submit", e => {
  e.preventDefault()
  
  if(todoInput?.value == "" || todoInput?.value == null) return

  const newTodo: TaskType = {
    id: uuidV4(),
    title: todoInput.value,
    completed: false,
    createdAt: new Date()
  }
  todos.push(newTodo)

  addTodoItem(newTodo)
  todoInput.value = ""
})

function addTodoItem(todo: TaskType){
  const todoItem = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", ()=>{
    todo.completed = checkbox.checked
    saveTodos()
  })
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  label.append(checkbox, todo.title)
  todoItem.append(label)
  todoList?.append(todoItem)
}

function saveTodos() {
  localStorage.setItem("TODOS", JSON.stringify(todos))
}

function loadTodos(): TaskType[] {
  const todoJSON = localStorage.getItem("TODOS")  
  if(todoJSON == null) return []
  return JSON.parse(todoJSON )
}