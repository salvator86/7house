import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {ButtonContactComponent} from "../../shared/button-contact/button-contact.component";
import {FirebaseService} from "../../core/services/firebase/firebase.service";

@Component({
  selector: 'app-contacts-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ButtonContactComponent],
  templateUrl: './contacts-screen.component.html',
  styleUrls: ['./contacts-screen.component.scss', './contacts-screen-2.component.scss']
})
export class ContactsScreenComponent {
  firebaseService: FirebaseService = inject(FirebaseService)
}
