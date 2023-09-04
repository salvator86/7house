import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {ButtonContactComponent} from "../../shared/button-contact/button-contact.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe, ButtonContactComponent],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent {

  @Input() homeScreenBackgrounds: any;

  getBackground(): any {
    return {
      'background': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${this.homeScreenBackgrounds[0].imgURL})`,
      'background-size': 'cover',
      'background-position': 'center center'
    }
  }
}
