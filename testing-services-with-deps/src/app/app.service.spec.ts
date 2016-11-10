/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { ApiService } from './api.service';

class ApiServiceStub {
  getTitleForPage() {};
}

describe('Service: App', () => {
  let service: AppService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        { provide: ApiService, useClass: ApiServiceStub }
      ]
    });
  });

  describe('get service using inject', () => {
    it('should create an injected instance', inject([AppService], (injectedService: AppService) => {
      expect(injectedService).toBeDefined();
    }));
  });

  describe('get service from TestBed', () => {
    beforeEach(() => {
      service = TestBed.get(AppService);
      apiService = TestBed.get(ApiService);
    });

    it('should create an instance', () => {
      expect(service).toBeDefined();
    });

    it('should provide a title', () => {
      spyOn(apiService, 'getTitleForPage').and.returnValue('test title');

      expect(service.title).toBe('test title');
      expect(apiService.getTitleForPage).toHaveBeenCalled();
    });
  });

});
