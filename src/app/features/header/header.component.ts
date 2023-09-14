import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {NavigationComponent} from "../../shared/navigation/navigation.component";
import {SelectLanguageComponent} from "../../shared/select-language/select-language.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [TranslatePipe, NavigationComponent, SelectLanguageComponent]
})
export class HeaderComponent {
  @Output() openMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
}
