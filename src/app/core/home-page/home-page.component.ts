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
import {ContactsScreenComponent} from "../../features/contacts-screen/contacts-screen.component";
import {FooterComponent} from "../../features/footer/footer.component";
import {ModalComponent} from "../../features/modal/modal.component";

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
    ContactsScreenComponent,
    FooterComponent,
    NgIf,
    ModalComponent
  ]
})
export class HomePageComponent implements OnInit {

  homeScreenBackgrounds: any;
  projects: any;
  firebaseService: FirebaseService = inject(FirebaseService);
  isModalOpen: boolean = false;
  modal: string;

  onOpenModal(): void {
    this.isModalOpen = true;
  }

  onCloseModal(): void {
    this.isModalOpen = false;
    this.modal = '';
  }

  setModal($event: any) {
    this.modal = $event;
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
