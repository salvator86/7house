import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {ServiceComponent} from "../service/service.component";
import {Service} from "../../core/models/service";

@Component({
  selector: 'app-services-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ServiceComponent],
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.scss']
})
export class ServicesScreenComponent implements OnInit {

  services: Service[] = [
    {imgURL: 'assets/images/service1.png', title: 'serviceTitle1', subtitle: 'serviceSubtitle1'},
    {imgURL: 'assets/images/service2.png', title: 'serviceTitle2', subtitle: 'serviceSubtitle2'},
    {imgURL: 'assets/images/service3.png', title: 'serviceTitle3', subtitle: 'serviceSubtitle3'},
    {imgURL: 'assets/images/service4.png', title: 'serviceTitle4', subtitle: 'serviceSubtitle4'}
  ]

  ngOnInit(): void {
  }

}
