import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {NavigationComponent} from "../../shared/navigation/navigation.component";
import {SelectLanguageComponent} from "../../shared/select-language/select-language.component";
import {FirebaseService} from "../../core/services/firebase/firebase.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [TranslatePipe, NavigationComponent, SelectLanguageComponent, AsyncPipe]
})
export class HeaderComponent {

  @Input() isMenuOpen: boolean;

  @Output() openMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  firebaseService: FirebaseService = inject(FirebaseService)

  toggleIsMenuActive(): void {
    this.openMenuEmitter.emit()
  }
}
