import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todosArray:Todo[] = [
    {title : "Todo title", done : false, creationDate : new Date,},
    {title : "Todo One", done : false, creationDate : new Date,},
    {title : "Todo Two", done : false, creationDate : new Date,},
    {title : "Todo Three", done : true, creationDate : new Date,},
    {title : "Todo Four", done : false, creationDate : new Date,},
    {title : "Todo Five", done : false, creationDate : new Date,},
  ];

  constructor() { }

  ngOnInit() {
    console.log(`============> oninit pour TodoListComponent` , this.todosArray);
  }
  receiveEvent(checkedToDo:Todo){
    console.log(`============> pour receiveEvent` , checkedToDo);
    checkedToDo.done = true;
  }
}
