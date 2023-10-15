import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {Team} from "../../core/models/team";
import {TeammateComponent} from "../teammate/teammate.component";

@Component({
  selector: 'app-team-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TeammateComponent],
  templateUrl: './team-screen.component.html',
  styleUrls: ['./team-screen.component.scss']
})
export class TeamScreenComponent {
  team: Team[] = [
    {imgURL: 'assets/images/stanislav.png', name: "stanislav", responsibility: 'stanislavResponsibilities'},
    {imgURL: 'assets/images/irina.png', name: "irina", responsibility: 'irinaResponsibilities'},
    {imgURL: 'assets/images/mikhailo.png', name: "mikhailo", responsibility: 'mikhailoResponsibilities'}
  ]
}
