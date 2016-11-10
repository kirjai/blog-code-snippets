import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: string;

  constructor (
    private appService: AppService
  ) {}

  ngOnInit() {
    this.title = this.appService.title;
  }
}
