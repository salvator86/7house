import {Component, inject, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase/firebase.service";
import {Background} from "../models/background";
import {Project, ProjectTable} from "../models/project";
import {FormBuilder, FormGroup} from "@angular/forms";
import {updatePhoneNumber} from "@angular/fire/auth";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  homeScreenBackgrounds: string[];
  projects: ProjectTable[];
  phoneNumber: string;
  projectForm: FormGroup;
  isAddingMode: boolean = false;
  isEditPhoneMode: boolean = false;

  private firebaseService: FirebaseService = inject(FirebaseService);

  private oldFile: string = ''

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
    this.isAddingMode = false;
    this.oldFile = '';
  }

  updateProjectData(index: number) {
    this.projects[index].isEditing = false;

    this.addNewProject(index)

    this.deleteOldFile();
  }

  addNewProject(index: number) {
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

    this.firebaseService.updateProjects(updatedProjects);

    this.isAddingMode = false;
    this.projectForm.reset();
  }

  deleteProject(index: number) {
    this.firebaseService.delete(this.projects[index].imgURL)

    const updatedProjects: Project[] = this.projects
      .filter((el, i) => i !== index)
      .map(projectTable => {
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

    this.firebaseService.updateProjects(updatedProjects);
  }

  ngOnInit(): void {
    this.firebaseService.homeScreenBackgrounds.subscribe(data => {
      this.homeScreenBackgrounds = data;
    });
    this.firebaseService.projects.subscribe(data => {
      this.projects = data;
    })
    this.firebaseService.phoneNumber.subscribe(data => {
      this.phoneNumber = data;
    })
  }

  upload(event: any, index: number) {
    this.oldFile = this.projectForm.get('imgURL')?.value;
    this.firebaseService.pushFileToStorage(event.target.files[0])
      .then(url => this.projectForm.get('imgURL')?.setValue(url))
      .finally(() => this.updateProjectData(index))
  }

  uploadForNew(event: any, index: number) {
    this.oldFile = this.projectForm.get('imgURL')?.value;
    this.firebaseService.pushFileToStorage(event.target.files[0])
      .then(url => this.projectForm.get('imgURL')?.setValue(url))
      .finally(() => this.addNewProject(index))
  }

  deleteOldFile() {
    console.log(this.oldFile)
    if(this.oldFile) {
      this.firebaseService.delete(this.oldFile)
    }
  }

  deleteBackground(bg: string) {
    this.firebaseService.delete(bg)
    this.firebaseService.updateBackgrounds([...this.homeScreenBackgrounds.filter(el => el !== bg)])
  }

  addBackground(file: any) {
    const bg = file.target.files[0];
    this.firebaseService.pushFileToStorage(bg).then(url => {
      const backgrounds: string[] = [...this.homeScreenBackgrounds, url];

      this.firebaseService.updateBackgrounds(backgrounds);
    })
  }

  updatePhoneNumber(phone: any) {
    this.firebaseService.updatePhone(phone);
    this.isEditPhoneMode = false;
  }
}
