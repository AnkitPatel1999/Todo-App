import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo';
import { v4 as uuid } from 'uuid';

import { TodoService } from './../../service/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;
  constructor(private todoService: TodoService ) { }

  ngOnInit() {
  }

  handleAdd(){
    const newTodos: Todo = {
      id: uuid(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date(),
    }
    this.todoService.addTodo(newTodos);
    this.todoTitle = "";
  }






}
