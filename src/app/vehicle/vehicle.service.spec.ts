/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { VehicleService } from './vehicle.service';
import { environment } from 'src/environments/environment';
import { vehicles } from './vehicle.dummy';

describe('Service: Vehicle', () => {
  let injector: TestBed;
  let service: VehicleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleService],
    });

    injector = TestBed.inject(TestBed);
    service = injector.inject(VehicleService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject(
    [VehicleService],
    (service: VehicleService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return list of vehicles', () => {
    service.getVehicles().subscribe((res) => {
      expect(res).toEqual(vehicles);
    });

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(vehicles);
  });
});
