import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project} from "../../core/models/project";
import {TranslationService} from "../../core/services/translation/translation.service";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-modal-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule, ReactiveFormsModule, ProjectComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private translationService: TranslationService = inject(TranslationService);

  @ViewChild('modalBlock') elementRef: ElementRef;

  @Input() modal: string;
  @Input() isModalOpen: boolean;
  @Input() projects: Project[];
  @Input() currentProjectIndex: number;

  @Output() modalEmitter = new EventEmitter();
  @Output() onOpenEmitter = new EventEmitter();
  @Output() onCloseEmitter = new EventEmitter();
  @Output() currenProjectIndexEmitter = new EventEmitter();

  form: FormGroup;
  private isFirstClickOutside = true;

  get project(): Project {
    return this.projects[this.currentProjectIndex];
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isFirstClickOutside) {
      this.isFirstClickOutside = false;
    } else {
      if (!this.elementRef.nativeElement.contains(event.target) && this.isModalOpen) {
        this.onCloseEmitter.emit();
        this.form.reset();
      }
    }
  }

  sendForm(form: any) {
    this.modalEmitter.emit('thanks');
    console.log(form)
  }

  getText(ua: string, en: string): string {
    return this.translationService.currentLanguage === 'ua' ? ua : en;
  }

  prevProject() {
    if (this.currentProjectIndex > 0) {
      this.currenProjectIndexEmitter.emit(this.currentProjectIndex - 1);
    }
  }

  nextProject() {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currenProjectIndexEmitter.emit(this.currentProjectIndex + 1);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',
        [Validators.minLength(2), Validators.required]),
      phone: new FormControl('',
        [Validators.minLength(10), Validators.maxLength(13), Validators.required])
    })
  }

}
