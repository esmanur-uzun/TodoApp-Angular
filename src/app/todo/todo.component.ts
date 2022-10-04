import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
  todos: Todo[] = []
  newTodo:string

  constructor(){
    this.todos = this.getItemFromLS()
  }
  setLS(){
    localStorage.removeItem("todos")
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  saveTodo(){
    if(this.newTodo){
      let todo = new Todo()
      todo.name=this.newTodo
      todo.isCompleted= true

      
      this.todos = this.getItemFromLS()
      this.todos.push(todo)
      this.setLS()

      this.newTodo = ""
    }
    else{
      alert("Please enter a todo")
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted
    this.setLS()
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i) => i !== id )
    this.setLS()
  }

  clearAll(){
    this.todos= []
    localStorage.removeItem("todos")
  }
  getItemFromLS(){
   
    
    let value = localStorage.getItem("todos")

    if(value != null){
      this.todos= JSON.parse(value)
    }
    return this.todos;

  }
}
