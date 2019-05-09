import { TestBed } from '@angular/core/testing';

import { WebUiService } from './web-ui.service';

describe('WebUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebUiService = TestBed.get(WebUiService);
    expect(service).toBeTruthy();
  });
});
