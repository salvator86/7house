import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {Team} from "../../core/models/team";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-teammate',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './teammate.component.html',
  styleUrls: ['./teammate.component.scss'],
  animations: [
    trigger('readmore', [
      state('plus', style({ transform: 'rotate(45deg)' })),
      transition(':enter', [
        style({ transform: 'rotate(45deg)' }),
        animate('.5s'),
      ]),
      transition(':leave', [
        animate('.5s', style({ transform: 'rotate(0)' })),
      ]),

      state('info', style({ width: '272px' })),
      state('info-out', style({ width: '56px' })),
      transition('info => info-out', [
        style({ width: '272px' }),
        animate('.5s', style({ width: '56px' })),
      ]),
      transition('info-out => info', [
        style({ width: '56px' }),
        animate('.5s', style({ width: '272px' })),
      ]),
      transition(':leave', [
        animate('.5s', style({ width: '272px' })),
      ]),

      state('text', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 1 }),
        animate('1.5s'),
      ]),
      transition(':leave', [
        animate('1.5s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class TeammateComponent {

  @Input() teammate: Team;
  isReadable: boolean = false;

  getBackgroundTeammate(imgURL: string): {'background-image': string} {
    return {
      'background-image': `url(${imgURL})`
    };
  }
}
