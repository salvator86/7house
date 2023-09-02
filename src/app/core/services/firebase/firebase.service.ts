import {inject, Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: AngularFirestore = inject(AngularFirestore)
  data: AngularFirestoreCollection<any>;
  projects: Subject<any[]> = new Subject<any>;
  homeScreenBackgrounds:  Subject<any[]> = new Subject<any>;

  getData(): void {
    this.data = this.db.collection('projects');
    this.data.valueChanges().subscribe(data => {
      console.log(data)
      this.projects.next(data[0].projects);
      this.homeScreenBackgrounds.next(data[0].homeScreen);
    })
  }

}