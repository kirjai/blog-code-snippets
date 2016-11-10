import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class AppService {

  constructor(
    private apiService: ApiService
  ) { }

  get title(): string {
    return this.apiService.getTitleForPage()
  }

}
