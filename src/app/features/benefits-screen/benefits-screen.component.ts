import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {Benefit} from "../../core/models/benefit";
import {BenefitComponent} from "../benefit/benefit.component";

@Component({
  selector: 'app-benefits-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, BenefitComponent],
  templateUrl: './benefits-screen.component.html',
  styleUrls: ['./benefits-screen.component.scss']
})
export class BenefitsScreenComponent {
  benefits: Benefit[] = [
    {imgURL: 'assets/images/benefit-photo-1.png', title: 'offer1'},
    {imgURL: 'assets/images/benefit-photo-2.png', title: 'offer2'},
    {imgURL: 'assets/images/benefit-photo-3.png', title: 'offer3'},
    {imgURL: 'assets/images/benefit-photo-4.png', title: 'offer4'},
    {imgURL: 'assets/images/benefit-photo-5.png', title: 'offer5'},
    {imgURL: 'assets/images/benefit-photo-6.png', title: 'offer6'},
  ]
}
