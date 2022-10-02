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

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo()
      todo.name=this.newTodo
      todo.isCompleted= true

      this.todos.push(todo)

      this.newTodo = ""
    }
    else{
      alert("Please enter a todo")
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }
}
