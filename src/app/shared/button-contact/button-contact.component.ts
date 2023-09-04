import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-button-contact',
  standalone: true,
    imports: [CommonModule, TranslatePipe],
  templateUrl: './button-contact.component.html',
  styleUrls: ['./button-contact.component.scss'],
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
export class ButtonContactComponent implements OnInit {

  isHover: boolean = false;

  ngOnInit(): void {
  }

}
