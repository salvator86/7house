import {Component, inject, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase/firebase.service";
import {Project, ProjectTable} from "../models/project";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  private oldFile: string = '';

  private firebaseService: FirebaseService = inject(FirebaseService);

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitleUA: ['', Validators.required],
      subtitleEN: [''],
      square: ['', Validators.required],
      wallMaterialUA: [''],
      wallMaterialEN: [''],
      additionalInfoUA: [''],
      additionalInfoEN: [''],
      imgURL1: ['', Validators.required],
      imgURL2: [''],
      imgURL3: [''],
      imgURL4: [''],
      imgURL5: [''],
      imgURL6: [''],
      imgURL7: [''],
      imgURL8: [''],
      imgURL9: [''],
      imgURL10: [''],
      video: [''],
    });
  }

  editProject(index: number): void {

    this.projects = this.projects.map(project => {
      return {
        ...project,
        isEditing: false
      }
    });

    const project: ProjectTable = this.projects[index];

    for (let i = 1; i <= 10; i++) {
      const imgURLControlName = `imgURL${i}`;
      if (project.imgURL && project.imgURL.length >= i) {
        this.projectForm.get(imgURLControlName)?.setValue(project.imgURL[i - 1]);
      } else {
        this.projectForm.get(imgURLControlName)?.setValue('');
      }
    }

    // Заповнити інші поля форми
    this.projectForm.patchValue({
      title: project.title,
      subtitleUA: project.subtitleUA,
      subtitleEN: project.subtitleEN,
      square: project.square,
      wallMaterialUA: project.wallMaterialUA,
      wallMaterialEN: project.wallMaterialEN,
      additionalInfoUA: project.additionalInfoUA,
      additionalInfoEN: project.additionalInfoEN,
      video: project.video
    });

    project.isEditing = true;
    this.isAddingMode = false;
    this.oldFile = '';
  }

  updateProjectData(index: number): void {
    this.projects[index].isEditing = false;

    this.addNewProject(index)

    this.deleteOldFile();
  }

  addNewProject(index: number): void {
    const form: FormGroup<any> = this.projectForm;

    const projectImages: string[] = [];

    for (let i: number = 1; i <= 10; i++) {
      projectImages.push(form.get('imgURL' + i)?.value);
    }

    this.projects[index] = {
      title: form.get('title')?.value,
      subtitleUA: form.get('subtitleUA')?.value,
      subtitleEN: form.get('subtitleEN')?.value,
      square: form.get('square')?.value,
      wallMaterialUA: form.get('wallMaterialUA')?.value,
      wallMaterialEN: form.get('wallMaterialEN')?.value,
      additionalInfoUA: form.get('additionalInfoUA')?.value,
      additionalInfoEN: form.get('additionalInfoEN')?.value,
      video: form.get('video')?.value,
      imgURL: [...projectImages]
    };

    const updatedProjects: Project[] = this.projects.map((projectTable: ProjectTable): any => {
      return {
        imgURL: [...projectTable.imgURL],
        title: projectTable.title,
        subtitleUA: projectTable.subtitleUA,
        subtitleEN: projectTable.subtitleEN,
        square: projectTable.square,
        wallMaterialEN: projectTable.wallMaterialEN,
        wallMaterialUA: projectTable.wallMaterialUA,
        additionalInfoEN: projectTable.additionalInfoEN,
        additionalInfoUA: projectTable.additionalInfoUA,
        video: projectTable.video
      }
    })

    this.firebaseService.updateProjects(updatedProjects);

    this.isAddingMode = false;
    this.projectForm.reset();
  }

  deleteProject(index: number): void {
    if(this.projects[index].imgURL.length) {
      this.projects[index].imgURL.map((el: string) => this.firebaseService.delete(el))
    }

    const updatedProjects: Project[] = this.projects
      .filter((el: ProjectTable, i: number): boolean => i !== index)
      .map((projectTable: ProjectTable) => {
      return {
        imgURL: projectTable.imgURL,
        title: projectTable.title,
        subtitleUA: projectTable.subtitleUA,
        subtitleEN: projectTable.subtitleEN,
        square: projectTable.square,
        wallMaterialEN: projectTable.wallMaterialEN,
        wallMaterialUA: projectTable.wallMaterialUA,
        additionalInfoEN: projectTable.additionalInfoEN,
        additionalInfoUA: projectTable.additionalInfoUA,
        video: projectTable.video
      }
    })

    this.firebaseService.updateProjects(updatedProjects);
  }

  ngOnInit(): void {
    this.firebaseService.homeScreenBackgrounds.subscribe((data: any[]): void => {
      this.homeScreenBackgrounds = data;
    });
    this.firebaseService.projects.subscribe((data: any[]): void => {
      this.projects = data;
    })
    this.firebaseService.phoneNumber.subscribe(data => {
      this.phoneNumber = data;
    })
  }

  uploadForNew(event: any, index: number, i: number): void {
    this.oldFile = this.projectForm.get('imgURL' + index)?.value;
    this.firebaseService.pushFileToStorage(event.target.files[0])
      .then(url => this.projectForm.get('imgURL' + index)?.setValue(url))
      .finally(() => this.addNewProject(i))
  }

  deleteOldFile(): void {
    if(this.oldFile) {
      this.firebaseService.delete(this.oldFile)
    }
  }

  deleteBackground(bg: string): void {
    this.firebaseService.delete(bg)
    this.firebaseService.updateBackgrounds([...this.homeScreenBackgrounds
      .filter((el: string) => el !== bg)])
  }

  addBackground(file: any): void {
    const bg = file.target.files[0];
    this.firebaseService.pushFileToStorage(bg).then((url: string): void => {
      const backgrounds: string[] = [...this.homeScreenBackgrounds, url];

      this.firebaseService.updateBackgrounds(backgrounds);
    })
  }

  updatePhoneNumber(phone: any): void {
    this.firebaseService.updatePhone(phone);
    this.isEditPhoneMode = false;
  }

  uploadProjectFile(event: any, index: number, i: number): void {
    this.oldFile = this.projectForm.get('imgURL' + index)?.value;
    this.firebaseService.pushFileToStorage(event.target.files[0])
      .then(url => this.projectForm.get('imgURL' + index)?.setValue(url))
      .finally(() => this.updateProjectData(i))
  }

  cancelEditing(i: number): void {
    this.projects[i].isEditing = false;
    this.projectForm.reset();
  }

  cancelAdding(): void {
    this.isAddingMode = false;
    this.projectForm.reset();
  }
}
