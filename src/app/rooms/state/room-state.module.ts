import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './room.effects';
import { RoomFacade } from './room.facade';
import { reducer, ROOM_FEATURE_KEY } from './room.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(ROOM_FEATURE_KEY, reducer), EffectsModule.forFeature([RoomEffects])],
  providers: [RoomFacade],
})
export class RoomStateModule {}
