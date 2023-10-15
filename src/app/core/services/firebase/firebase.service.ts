import {inject, Injectable} from '@angular/core';
import {finalize, from, Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Project} from "../../models/project";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLogged: boolean = false;

  db: AngularFireDatabase = inject(AngularFireDatabase);
  fireStorage: AngularFireStorage = inject(AngularFireStorage);
  store: AngularFirestore = inject(AngularFirestore);
  auth: AngularFireAuth = inject(AngularFireAuth);

  projectsCollection: AngularFirestoreCollection<any>;
  backgroundsCollection: AngularFirestoreCollection<any>;
  phoneCollection: AngularFirestoreCollection<any>

  projects: Subject<any[]> = new Subject<any>;
  homeScreenBackgrounds:  Subject<any[]> = new Subject<any>;
  phoneNumber: Subject<any> = new Subject<any>;

  getData(): void {
    this.projectsCollection = this.store.collection('projects');
    this.projectsCollection.valueChanges().subscribe((data: any[]): void => {
      this.projects.next(data[0].projects);
    })

    this.backgroundsCollection = this.store.collection('background');
    this.backgroundsCollection.valueChanges().subscribe((data: any[]): void => {
      this.homeScreenBackgrounds.next(data[0].homeScreen);
    })

    this.phoneCollection = this.store.collection('phoneNumber');
    this.phoneCollection.valueChanges().subscribe((data: any[]): void => {
      console.log(data[0].phone)
      this.phoneNumber.next(data[0].phone)
    })
  }

  updateProjects(projects: Project[]): void {
    console.log(projects)
    this.projectsCollection.doc('6VTnsmsGJuXpd9W3OnmH').update({projects})
  }

  pushFileToStorage(fileUpload: any): Promise<string> {
    return new Promise<string>((resolve, reject): void => {
      const filePath: string = `/${fileUpload.name}`;
      const storageRef = this.fireStorage.ref(filePath);
      const uploadTask = this.fireStorage.upload(filePath, fileUpload);

      uploadTask.snapshotChanges().pipe(
        finalize((): void => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            fileUpload.url = downloadURL;
            this.saveFileData(fileUpload);
            resolve(downloadURL);
          }, error => {
            reject(error);
          });
        })
      ).subscribe();
    });
  }

  updateBackgrounds(backgrounds: string[]): void {
    this.backgroundsCollection.doc('k5gJXcL0tek56Aj4Lz4o').update({homeScreen: backgrounds});
  }

  updatePhone(phone: string): void {
    this.phoneCollection.doc('mewsZw7sHabj0KT3NrvE').update({phone})
  }

  delete(url: string): void {
    if(url) {
      const storageRef = this.fireStorage.refFromURL(url);

      storageRef.delete().subscribe(console.log)
    }
  }

  signIn(params: any): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(params.email, params.password))
  }

  private saveFileData(fileUpload: any): void {
    this.db.list('/').push(fileUpload);
  }
}
