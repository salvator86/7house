import {Component, ElementRef, HostListener, inject, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslationService} from "../../core/services/translation/translation.service";

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent {

  @Input() section: string;
  @ViewChild('selectLang') selectLang: ElementRef;

  translationService: TranslationService = inject(TranslationService);
  isAnotherLangShowed: boolean = false;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.selectLang.nativeElement.contains(event.target)) {
      this.isAnotherLangShowed = false
    }
  }

  changeLanguage(): void {
    this.translationService.changeLanguage();
  }

  showAnotherLanguage(): void {
    this.isAnotherLangShowed = !this.isAnotherLangShowed;
  }

  arrowPosition() {
    return this.isAnotherLangShowed
      ? {transform: 'rotate(45deg)', 'margin-bottom': '0px'}
      : {transform: 'rotate(225deg)', 'margin-bottom': '5px'}
  }

}
