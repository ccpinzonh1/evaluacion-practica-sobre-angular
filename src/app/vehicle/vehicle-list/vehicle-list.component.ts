import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  getVehiclesService() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }

  getMapListOfVehicles() {
    return this.vehicles.reduce(function (r: any, a: Vehicle) {
      r[a.marca] = (r[a.marca] || 0) + 1;
      return r;
    }, {});
  }

  getVehicles() {
    return this.vehicles;
  }

  ngOnInit() {
    this.getVehiclesService();
  }
}
