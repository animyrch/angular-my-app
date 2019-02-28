import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo-reduce',
  templateUrl: './todo-reduce.component.html',
  styleUrls: ['./todo-reduce.component.scss']
})
export class TodoReduceComponent implements OnInit {

  @Input() todoInput:Todo;
  @Output() onCheckToDo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`============> oninit pour TodoReduceComponent`);
  }

  onCheckTodoEvent = (params) => {
    console.log(`============>  pour onCheckTodo`, params);
    console.log(this.todoInput);
    this.onCheckToDo.emit(params);
  }
}
