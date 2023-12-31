import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Service} from "../../core/models/service";
import {TranslatePipe} from "../../core/pipes/translate.pipe";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Input() service: Service;
}
