import {inject, Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: AngularFirestore = inject(AngularFirestore)
  projectsCollection: AngularFirestoreCollection<any>;
  backgroundsCollection: AngularFirestoreCollection<any>;
  projects: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  homeScreenBackgrounds:  BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  getData(): void {
    this.projectsCollection = this.db.collection('projects');
    this.projectsCollection.valueChanges().subscribe(data => {
      this.projects.next(data[0].projects);
      console.log(data[0].projects);
    })

    this.backgroundsCollection = this.db.collection('background');
    this.backgroundsCollection.valueChanges().subscribe(data => {
      this.homeScreenBackgrounds.next(data[0].homeScreen);
      console.log(data[0].homeScreen);
    })

    // const backGrounds = [
    //   "https://firebasestorage.googleapis.com/v0/b/house-c2f86.appspot.com/o/home-page-1.png?alt=media&token=30329f86-9e66-4275-8304-81a8ab563036"
    // ]
    // this.homeScreenBackgrounds.next(backGrounds)

    const projects = [
      {
        "wallMaterialUA": "Керамоблок",
        "additionalInfoUA": "Встановлена система рекуперації",
        "additionalInfoEN": "A recovery system is installed",
        "title": "Black Stone",
        "subtitleUA": "Невелика коротка інформація про цей проект",
        "square": "120",
        "wallMaterialEN": "Ceramic block",
        "imgURL": "https://firebasestorage.googleapis.com/v0/b/house-c2f86.appspot.com/o/black-stone.png?alt=media&token=60d825f7-b249-462f-87a1-f7076e73d9a7",
        "subtitleEN": ""
      },
      {
        "wallMaterialUA": "Керамблок",
        "title": "Dark and white chocolate",
        "additionalInfoUA": "Встановлена система рекуперації",
        "square": 140,
        "subtitleEN": "",
        "imgURL": "https://firebasestorage.googleapis.com/v0/b/house-c2f86.appspot.com/o/dark-and-white-chocolate.png?alt=media&token=2f05c7a1-7702-4dc3-9503-6323171c6613",
        "subtitleUA": "Невелика коротка інформація про цей проект",
        "wallMaterialEN": "Ceramic block",
        "additionalInfoEN": "A recovery system is installed"
      },
      {
        "title": "Finnish house",
        "additionalInfoUA": "Встановлена система рекуперації",
        "subtitleUA": "Невелика коротка інформація про цей проект",
        "wallMaterialEN": "Ceramic block",
        "imgURL": "https://firebasestorage.googleapis.com/v0/b/house-c2f86.appspot.com/o/finnish-house.png?alt=media&token=d36d7eeb-8060-4ac8-82a0-560f76f30193",
        "additionalInfoEN": "A recovery system is installed",
        "square": 130,
        "subtitleEN": "",
        "wallMaterialUA": "Керамблок"
      }
    ]
    // this.projects.next(projects)
  }

}
