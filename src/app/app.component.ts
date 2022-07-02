import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'httpClient';

  constructor(private taskService: TaskService) {}

  getAllTasks() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('1').subscribe((task) => {
      console.log(task);
    });
  }

  createTask() {
    this.taskService
      .createTask({
        userId: '1',
        title: 'Carlos Task',
        completed: false,
      })
      .subscribe((newTask) => {
        console.log(newTask);
      });
  }

  updateTask() {
    this.taskService
      .updateTask({
        id: '200',
        userId: '1',
        title: 'Carlos Changed Task',
        completed: true,
      })
      .subscribe((updatedTask) => {
        console.log(updatedTask);
      });
    this.getAllTasks();
  }

  deleteTask() {
    this.taskService.deleteTask('1').subscribe((deletedTask) => {
      console.log(deletedTask);
    });
  }
}
