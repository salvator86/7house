import {Component, inject, OnInit} from '@angular/core';
import {FirebaseService} from "./core/services/firebase/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  firebaseService: FirebaseService = inject(FirebaseService);

  ngOnInit(): void {
    this.firebaseService.getData();
  }

}
