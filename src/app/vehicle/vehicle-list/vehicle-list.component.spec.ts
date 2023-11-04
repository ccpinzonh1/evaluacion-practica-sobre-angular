/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { vehicles } from '../vehicle.dummy';
import { of } from 'rxjs';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    let vehicleServiceMock = jasmine.createSpyObj('VehicleService', [
      'getVehicles',
    ]);
    vehicleServiceMock.getVehicles.and.returnValue(of(vehicles));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleListComponent],
      providers: [
        {
          provide: VehicleService,
          useValue: vehicleServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicles = vehicles;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  afterEach(() => {
    component.vehicles = [];
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with the vehicle information', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // Table
      const table = debug.query(By.css('#vehicle-table'));
      expect(table).toBeTruthy();

      // Rows
      let tableRows = table.queryAll(By.css('tr'));
      expect(tableRows.length).toBe(4);

      // Header row
      let headerRowCells = tableRows[0].queryAll(By.css('th'));

      // Header row cells
      expect(headerRowCells[0].nativeElement.textContent).toBe('#');
      expect(headerRowCells[1].nativeElement.textContent).toBe('Marca');
      expect(headerRowCells[2].nativeElement.textContent).toBe('Línea');
      expect(headerRowCells[3].nativeElement.textContent).toBe('Modelo');

      // Data rows
      let tableBodyRows = tableRows.slice(1);
      expect(tableBodyRows.length).toBe(component.getVehicles().length);

      // Data rows cells
      let row1Cells = tableBodyRows[0].queryAll(By.css('td'));

      expect(row1Cells[0].nativeElement.textContent).toBe(
        vehicles[0].id.toString()
      );
      expect(row1Cells[1].nativeElement.textContent).toBe(vehicles[0].marca);
      expect(row1Cells[2].nativeElement.textContent).toBe(vehicles[0].linea);
      expect(row1Cells[3].nativeElement.textContent).toBe(
        vehicles[0].modelo.toString()
      );

      done();
    });
  });
  it('should render the total of vehicles', () => {
    const total = debug.query(By.css('#total-vehicles'));
    expect(total).toBeTruthy();

    const spans = total.queryAll(By.css('span'));
    expect(spans.length).toBe(3)
  });
});
