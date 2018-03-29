import {TestBed, inject, getTestBed} from '@angular/core/testing';

import {ResidentService} from './resident.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ResidentService', () => {
    let injector: TestBed;
    let service: ResidentService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ResidentService]
        });
        injector = getTestBed();
        service = injector.get(ResidentService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', inject([ResidentService], (residentService: ResidentService) => {
        expect(service).toBeTruthy();
    }));

    it('should return an Observable<Resident[]>', () => {
        const dummyResidents = [{
            'id': 1,
            'firstName': 'Ramon',
            'lastName': 'Singh'
        },
            {
                'id': 2,
                'firstName': 'Rahul',
                'lastName': 'Singh'
            }
        ];


        service.getResidents().subscribe(residents => {
            expect(residents.length).toBe(2);
            expect(residents).toEqual(dummyResidents);
        });

        const req = httpMock.expectOne(`${service.API_URL}/api/residents`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyResidents);
    });
});
