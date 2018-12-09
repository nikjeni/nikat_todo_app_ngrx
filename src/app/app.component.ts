import { Todo } from './todo';
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./styles.scss'],
  templateUrl: './app.component.html',
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }

  public addTodo(): void {
    console.log('app add')
    this.todoDataService.addTodo(this.newTodo);
    // this.newTodo = new Todo();
  }

  public toggleTodoComplete({ id }): void {
    this.todoDataService.toggleTodoComplete(id);
  }

  public removeTodo({ id }): void {
    this.todoDataService.deleteTodoById(id);
  }

  public allTodos(): number {
    return this.incompleteTodos.length + this.completeTodos.length;
  }
  public get incompleteTodos(): Array<Todo> {
    return this.todoDataService.getIncompleteTodos();
  }

  public get completeTodos(): Array<Todo> {
    return this.todoDataService.getCompleteTodos();
  }
}
