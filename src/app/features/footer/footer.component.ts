import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../../shared/navigation/navigation.component";
import {SelectLanguageComponent} from "../../shared/select-language/select-language.component";
import {TranslatePipe} from "../../core/pipes/translate.pipe";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NavigationComponent, SelectLanguageComponent, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  scrollToServices(section: string) {
    const servicesSection = document.getElementById(section);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
