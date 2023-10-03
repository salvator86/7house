import {Component, inject, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase/firebase.service";
import {Background} from "../models/background";
import {Project, ProjectTable} from "../models/project";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  homeScreenBackgrounds: Background[];
  projects: ProjectTable[];

  private firebaseService: FirebaseService = inject(FirebaseService);

  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      title: [''],
      subtitleUA: [''],
      subtitleEN: [''],
      square: [''],
      wallMaterialUA: [''],
      wallMaterialEN: [''],
      additionalInfoUA: [''],
      additionalInfoEN: [''],
      imgURL: ['']
    });
  }

  editProject(index: number) {
    const project = this.projects[index];
    this.projectForm.setValue(project);
    project.isEditing = true;
  }

  updateProjectData(index: number) {
    this.projects[index].isEditing = false;

    this.projects[index] = this.projectForm.value;

    const updatedProjects: Project[] = this.projects.map(projectTable => {
      return {
        imgURL: projectTable.imgURL,
        title: projectTable.title,
        subtitleUA: projectTable.subtitleUA,
        subtitleEN: projectTable.subtitleEN,
        square: projectTable.square,
        wallMaterialEN: projectTable.wallMaterialEN,
        wallMaterialUA: projectTable.wallMaterialUA,
        additionalInfoEN: projectTable.additionalInfoEN,
        additionalInfoUA: projectTable.additionalInfoUA
      }
    })

    this.firebaseService.updateProjects(updatedProjects)

  }

  ngOnInit(): void {
    this.firebaseService.homeScreenBackgrounds.subscribe(data => {
      this.homeScreenBackgrounds = data;
    });
    this.firebaseService.projects.subscribe(data => {
      this.projects = data;
    })
  }
}
