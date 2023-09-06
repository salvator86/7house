import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Benefit} from "../../core/models/benefit";
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss'],
  animations: [
    trigger('hover', [
      state('over', style({ opacity: 0.3 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.2s ease-in-out'),
      ]),
      transition(':leave', [
        animate('.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ])
  ],
})
export class BenefitComponent implements OnInit {

  @Input() benefit: Benefit;
  isHover: boolean = false;

  getOfferBackground(background: string) {
    return {
      'background-image': `url(${background})`,
      'background-size': 'cover',
      'background-position': 'center center'
    }
  }

  ngOnInit(): void {
  }

}
