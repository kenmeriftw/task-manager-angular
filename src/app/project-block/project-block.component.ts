import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Todo } from '../todo';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})

export class ProjectBlockComponent implements OnInit {
	constructor(public ProjectService: ProjectService) {}

  ngOnInit() {
    this.ProjectService.updateProjects();
  }

  todoChangeCompletion(project: Project, todo: Todo, is_completed: boolean) {
    let project_id = project.id;
    let todo_id = todo.id;

    this.ProjectService.todoChangeCompletion(project_id, todo_id, is_completed);
  }

}
