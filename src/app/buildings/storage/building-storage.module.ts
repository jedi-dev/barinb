import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingStorage } from './building.storage';

@NgModule({
  imports: [CommonModule],
  providers: [BuildingStorage],
})
export class BuildingStorageModule {}
