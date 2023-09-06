import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent implements OnInit {

  @ViewChild('modalBlock') elementRef: ElementRef;

  @Input() isLetterSent: boolean = false;
  @Input() isModalOpen: boolean;
  @Output() onOpenEmitter = new EventEmitter();
  @Output() onCloseEmitter = new EventEmitter();

  form: FormGroup;
  private isFirstClickOutside = true;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isFirstClickOutside) {
      this.isFirstClickOutside = false;
    } else {
      if (!this.elementRef.nativeElement.contains(event.target) && this.isModalOpen) {
        this.onCloseEmitter.emit();
        this.form.reset();
        this.isLetterSent = false;
      }
    }
  }

  sendForm(form: any) {
    this.isLetterSent = true;
    console.log(form)
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
