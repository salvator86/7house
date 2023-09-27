import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {ButtonContactComponent} from "../../shared/button-contact/button-contact.component";

@Component({
  selector: 'app-contacts-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ButtonContactComponent],
  templateUrl: './contacts-screen.component.html',
  styleUrls: ['./contacts-screen.component.scss', './contacts-screen-2.component.scss']
})
export class ContactsScreenComponent implements OnInit {

  ngOnInit(): void {
  }

}
