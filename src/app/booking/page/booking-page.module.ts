import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page.component';
import { RoomStateModule } from '@app/rooms/state';
import { RoomServiceModule } from '@app/rooms/service';
import { BookingPageRoutingModule } from './booking-page-routing.module';

@NgModule({
  declarations: [BookingPageComponent],
  imports: [CommonModule, RoomStateModule, RoomServiceModule, BookingPageRoutingModule],
})
export class BookingPageModule {}
