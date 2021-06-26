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

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  trackByTodo(index: number, todo: Todo):number {
    return todo.id;
  }

}
