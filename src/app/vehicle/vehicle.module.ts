import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  exports:[VehicleListComponent],
  imports: [
    CommonModule
  ],
  declarations: [VehicleListComponent]
})
export class VehicleModule { }
