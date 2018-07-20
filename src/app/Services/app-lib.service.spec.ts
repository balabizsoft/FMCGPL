import { TestBed, inject } from '@angular/core/testing';

import { AppLibService } from './app-lib.service';

describe('AppLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLibService]
    });
  });

  it('should be created', inject([AppLibService], (service: AppLibService) => {
    expect(service).toBeTruthy();
  }));
});
