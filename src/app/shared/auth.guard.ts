import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // appelée lors de la navigation
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //return true; // signifie "toujours activé/autorisé"

    return this.authService.isAdmin().then((authentifie: Boolean) => {
      // ici on traite la valeur retournée par la promesse
      if (authentifie) {
        console.log('AUTORISE A NAVIGUER');
        return true; // on autorise la navigation
      } else {
        console.log('NON AUTORISE A NAVIGUER');
        this.router.navigate(['/home']);
        return false;
      }
    });
  }
}
