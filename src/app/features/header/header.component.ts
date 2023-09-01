import { Component, OnInit } from '@angular/core';
import {TranslatePipe} from "../../core/pipes/translate.pipe";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [TranslatePipe]
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }

}
