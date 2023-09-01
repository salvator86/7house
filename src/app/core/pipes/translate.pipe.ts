import {inject, Pipe, PipeTransform} from '@angular/core';
import {TranslationService} from "../services/translation/translation.service";

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  translationService: TranslationService = inject(TranslationService);
  transform(value: string, ...args: unknown[]): string {
    return this.translationService.lang[value];
  }

}
