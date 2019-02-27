import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReduceComponent } from './todo-reduce.component';

describe('TodoReduceComponent', () => {
  let component: TodoReduceComponent;
  let fixture: ComponentFixture<TodoReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
