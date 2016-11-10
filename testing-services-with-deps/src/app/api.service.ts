import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

  public getTitleForPage(): string {
    return 'App works all the way from the api service';
  }

}
