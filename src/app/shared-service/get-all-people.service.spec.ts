import { TestBed, inject } from '@angular/core/testing';

import { GetAllPeopleService } from './get-all-people.service';

describe('GetAllPeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllPeopleService]
    });
  });

  it('should be created', inject([GetAllPeopleService], (service: GetAllPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
