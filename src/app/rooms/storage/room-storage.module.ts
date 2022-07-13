import { NgModule } from '@angular/core';
import { RoomStorage } from './room.storage';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [RoomStorage],
})
export class RoomStorageModule {}
