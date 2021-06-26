import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss']
})
export class TodoCreatorComponent {

  todo = new FormControl('', [Validators.required, Validators.minLength(1)]);
  project = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(public ProjectService: ProjectService) {}

  ngOnInit() {
    this.ProjectService.updateProjects();
  }

  todoChangeCompletion(project: Project, todo: Todo, is_completed: boolean) {
    let project_id = project.id;
    let todo_id = todo.id;

    this.ProjectService.todoChangeCompletion(project_id, todo_id, is_completed);
  }

  onSubmit() {
  	this.ProjectService.addTodo(this.project.value, this.todo.value);
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

}
