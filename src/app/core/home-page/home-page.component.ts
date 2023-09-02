import {Component, inject, Input, OnInit} from '@angular/core';
import {AppModule} from "../../app.module";
import {TranslatePipe} from "../pipes/translate.pipe";
import {AsyncPipe, NgIf} from "@angular/common";
import {HomeScreenComponent} from "../../features/home-screen/home-screen.component";
import {ServicesScreenComponent} from "../../features/services-screen/services-screen.component";
import {BenefitsScreenComponent} from "../../features/benefits-screen/benefits-screen.component";
import {TeamScreenComponent} from "../../features/team-screen/team-screen.component";
import {ProjectsScreenComponent} from "../../features/projects-screen/projects-screen.component";
import {FirebaseService} from "../services/firebase/firebase.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    TranslatePipe,
    AsyncPipe,
    HomeScreenComponent,
    ServicesScreenComponent,
    BenefitsScreenComponent,
    TeamScreenComponent,
    ProjectsScreenComponent,
    NgIf,
  ]
})
export class HomePageComponent implements OnInit {

  homeScreenBackgrounds: any;
  projects: any;
  firebaseService: FirebaseService = inject(FirebaseService);

  ngOnInit(): void {
    this.firebaseService.homeScreenBackgrounds.subscribe(data => {
      this.homeScreenBackgrounds = data;
    });
    this.firebaseService.projects.subscribe(data => {
      this.projects = data;
    })
  }

}
