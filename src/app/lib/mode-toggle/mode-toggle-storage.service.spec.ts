import { TestBed } from '@angular/core/testing';

import { ModeToggleStorageService } from './mode-toggle-storage.service';

describe('ModeToggleStorageService', () => {
  let service: ModeToggleStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeToggleStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
