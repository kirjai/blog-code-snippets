import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(routeSnapshot: ActivatedRouteSnapshot): Observable<boolean> {
    let redirect = routeSnapshot.data['authGuardRedirect'];
    let isUserLoggedIn$ = this.authService.isLoggedIn();

    isUserLoggedIn$
      .filter(isLoggedIn => !isLoggedIn && !!redirect)
      .subscribe(() => this.router.navigate([redirect]));

    return isUserLoggedIn$;
  }
}
