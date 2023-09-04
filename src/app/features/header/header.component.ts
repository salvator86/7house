import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {NavigationComponent} from "../../shared/navigation/navigation.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [TranslatePipe, NavigationComponent]
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

}
