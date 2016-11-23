import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn(): Observable<boolean> {
    return Observable.of(false);
  }
}
