import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {FirebaseService} from "../services/firebase/firebase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  router: Router = inject(Router);
  firebaseService: FirebaseService = inject(FirebaseService);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.firebaseService.isLogged || this.router.navigate(['login']);
  }

}
