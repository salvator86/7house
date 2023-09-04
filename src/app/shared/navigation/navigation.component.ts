import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";

@Component({
  selector: 'app-navigation',
  standalone: true,
    imports: [CommonModule, TranslatePipe],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  scrollToServices(section: string) {
    const servicesSection = document.getElementById(section);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
  }

}
