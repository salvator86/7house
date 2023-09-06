import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
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
export class HomeScreenComponent implements OnInit, OnDestroy {

  @Input() homeScreenBackgrounds: any;
  @Output() onModalOpen = new EventEmitter();

  currentBackground: number = 0;
  timer: number = 7000;
  interval: ReturnType<typeof setInterval>;

  changeToPrevBackground(): void {
    this.currentBackground--;
    this.startInterval();
  }

  changeToNextBackground(): void {
    this.currentBackground++;
    this.startInterval();
  }

  changeBackground(i: number): void {
    this.currentBackground = i;
    this.startInterval();
  }

  startInterval() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.homeScreenBackgrounds.length - 1 === this.currentBackground) {
        this.currentBackground = 0;
      } else {
        this.currentBackground++;
      }
    }, this.timer);
  }

  getBackground(): any {
    return {
      'background': `linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), url(${this.homeScreenBackgrounds[this.currentBackground].imgURL})`,
    }
  }

  ngOnInit() {
    if (this.homeScreenBackgrounds.length > 1) {
      this.startInterval();
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
