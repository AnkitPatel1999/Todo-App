import { Todo } from './../../model/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService) { }

  
  ngOnInit() {
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo;
    })
  }

  changeTodoStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo)
  {
    this.todoService.deleteTodo(todo);
  }

}
