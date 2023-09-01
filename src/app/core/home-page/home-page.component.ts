import {Component, Input, OnInit} from '@angular/core';
import {AppModule} from "../../app.module";
import {TranslatePipe} from "../pipes/translate.pipe";
import {AsyncPipe} from "@angular/common";
import {HomeScreenComponent} from "../../features/home-screen/home-screen.component";
import {ServicesScreenComponent} from "../../features/services-screen/services-screen.component";
import {BenefitsScreenComponent} from "../../features/benefits-screen/benefits-screen.component";
import {TeamScreenComponent} from "../../features/team-screen/team-screen.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    TranslatePipe,
    AsyncPipe,
    HomeScreenComponent,
    ServicesScreenComponent,
    BenefitsScreenComponent,
    TeamScreenComponent,
  ]
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {

  }

}
