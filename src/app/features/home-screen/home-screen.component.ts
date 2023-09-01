import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirebaseService} from "../../core/services/firebase/firebase.service";
import {HeaderComponent} from "../header/header.component";
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  animations: [
    trigger('contactUs', [
      state('over', style({ bottom: '-6px', right: '-6px' })),
      transition(':enter', [
        style({ bottom: '0px', right: '0px' }),
        animate('.2s ease-in-out'),
      ]),
      transition(':leave', [
        animate('.2s ease-in-out', style({ bottom: '0px', right: '0px' })),
      ]),
    ]),
  ],
})
export class HomeScreenComponent implements OnInit {

  dbService: FirebaseService = inject(FirebaseService);
  homeScreenBackgrounds: any;
  isHover: boolean = false;

  ngOnInit(): void {
    this.dbService.homeScreenBackgrounds.subscribe(data => {
      this.homeScreenBackgrounds = data;
    });
  }

  getBackground(): any {
    return {
      'background': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${this.homeScreenBackgrounds[0].imgURL})`,
      'background-size': 'cover',
      'background-position': 'center center'
    }
  }
}
