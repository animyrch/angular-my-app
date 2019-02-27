import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo-reduce',
  templateUrl: './todo-reduce.component.html',
  styleUrls: ['./todo-reduce.component.scss']
})
export class TodoReduceComponent implements OnInit {

  @Input() todoInput:Todo;
  @Output() onCheckToDoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`============> oninit pour TodoReduceComponent`);
  }

  onCheckTodo = (params) => {
    console.log(`============>  pour onCheckTodo`);
    this.onCheckToDoEvent.emit(this.todoInput);
  }
}
