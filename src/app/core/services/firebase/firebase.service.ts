import {inject, Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: AngularFirestore = inject(AngularFirestore)
  projectsCollection: AngularFirestoreCollection<any>;
  backgroundsCollection: AngularFirestoreCollection<any>;
  projects: Subject<any[]> = new Subject<any>;
  homeScreenBackgrounds:  Subject<any[]> = new Subject<any>;

  getData(): void {
    this.projectsCollection = this.db.collection('projects');
    this.projectsCollection.valueChanges().subscribe(data => {
      this.projects.next(data[0].projects);
    })

    this.backgroundsCollection = this.db.collection('background');
    this.backgroundsCollection.valueChanges().subscribe(data => {
      this.homeScreenBackgrounds.next(data[0].homeScreen);
    })
  }

}
