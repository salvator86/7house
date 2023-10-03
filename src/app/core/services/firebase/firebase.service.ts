import {inject, Injectable} from '@angular/core';
import {finalize, Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Project} from "../../models/project";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: AngularFireDatabase = inject(AngularFireDatabase);
  // fireStorage: AngularFireStorage = inject(AngularFireStorage);
  store: AngularFirestore = inject(AngularFirestore);

  projectsCollection: AngularFirestoreCollection<any>;
  backgroundsCollection: AngularFirestoreCollection<any>;

  projects: Subject<any[]> = new Subject<any>;
  homeScreenBackgrounds:  Subject<any[]> = new Subject<any>;

  getData(): void {
    this.projectsCollection = this.store.collection('projects');
    this.projectsCollection.valueChanges().subscribe(data => {
      this.projects.next(data[0].projects);
    })

    this.backgroundsCollection = this.store.collection('background');
    this.backgroundsCollection.valueChanges().subscribe(data => {
      this.homeScreenBackgrounds.next(data[0].homeScreen);
    })
  }

  updateProjects(projects: Project[]): void {
    this.projectsCollection.doc('6VTnsmsGJuXpd9W3OnmH').update({projects})
  }

  // pushFileToStorage(fileUpload: FileUpload): void {
  //   const filePath = /${fileUpload.file.name};
  //   const storageRef = this.storage.ref(filePath);
  //   const uploadTask = this.storage.upload(filePath, fileUpload.file);
  //
  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => {
  //       storageRef.getDownloadURL().subscribe(downloadURL => {
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //         // this.saveFileData(fileUpload);
  //       });
  //     })
  //   ).subscribe();
  // }

  // getFiles() {
  //   const storageRef = this.fireStorage.ref('/');
  //
  //   storageRef.listAll().subscribe(result => {
  //     result.items.forEach(itemRef => {
  //       console.log('File:', itemRef.fullPath);
  //     });
  //   });
  // }

}
