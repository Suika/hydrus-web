import { TestBed } from '@angular/core/testing';

import { HydrusFilesService } from './hydrus-files.service';

describe('HydrusFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HydrusFilesService = TestBed.get(HydrusFilesService);
    expect(service).toBeTruthy();
  });
});
