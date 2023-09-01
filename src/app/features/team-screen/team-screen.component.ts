import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {Team} from "../../core/models/team";
import {TeammateComponent} from "../teammate/teammate.component";
import {animate, state, style, transition} from "@angular/animations";

// state('text', style({ opacity: 1 })),
//   state('text-out', style({ opacity: 0 })),
//   transition('text => text-out', [
//     style({ opacity: 1 }),
//     animate('2s', style({ opacity: 0 })),
//   ]),
//   transition('text-out => text', [
//     style({ opacity: 0 }),
//     animate('2s', style({ opacity: 1 })),
//   ]),
//   transition(':leave', [
//     animate('2s', style({ opacity: 1 })),
//   ]),
// <div class="teammate__block-info" [@readmore]="isReadable ? 'text' : 'text-out'">

@Component({
  selector: 'app-team-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TeammateComponent],
  templateUrl: './team-screen.component.html',
  styleUrls: ['./team-screen.component.scss']
})
export class TeamScreenComponent implements OnInit {

  team: Team[] = [
    {imgURL: 'assets/images/stanislav.png', name: "stanislav", responsibility: 'stanislavResponsibilities'},
    {imgURL: 'assets/images/irina.png', name: "irina", responsibility: 'irinaResponsibilities'},
    {imgURL: 'assets/images/mikhailo.png', name: "mikhailo", responsibility: 'mikhailoResponsibilities'}
  ]

  ngOnInit(): void {
  }

}
