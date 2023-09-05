import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../../shared/navigation/navigation.component";
import {SelectLanguageComponent} from "../../shared/select-language/select-language.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NavigationComponent, SelectLanguageComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
