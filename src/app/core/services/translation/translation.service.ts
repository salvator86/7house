import {Injectable} from '@angular/core';
import {Languages} from "../../models/languages";
import {langUa} from '../../../../assets/languages/ua'
import {langEn} from '../../../../assets/languages/en'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage: Languages = Languages.ua;
  languages: any = {
    ua: langUa,
    en: langEn,
  }

  get lang() {
    return this.languages[this.currentLanguage];
  }

}
