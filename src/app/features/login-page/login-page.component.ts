import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FirebaseService} from "../../core/services/firebase/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  form: FormGroup;

  firebaseService: FirebaseService = inject(FirebaseService);
  router: Router = inject(Router);

  errorMessage: string = '';

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  login(): void {
    this.firebaseService.signIn(this.form.value).subscribe({
      next: () => {
        this.firebaseService.isLogged = true;
        this.errorMessage = '';
        this.router.navigate(['admin']);
      },
      error: () => {
        this.form.get('password')?.setValue('');
        this.errorMessage = 'Неправильний логін або пароль';
      },
    });
  }

}
