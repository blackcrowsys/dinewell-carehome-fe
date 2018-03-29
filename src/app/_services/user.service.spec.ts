import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    let service = UserService;
    beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    service = TestBed.get(UserService);
  });

  it('should be created', () =>
    {
        expect(service).toBeTruthy();
    });

});
