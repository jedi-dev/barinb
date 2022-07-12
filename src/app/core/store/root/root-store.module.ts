import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { rootInitialState, rootReducer } from './+state/root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootRouterStateSerializer } from './services/root-router-state-serializer.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(rootReducer, {
      initialState: rootInitialState,
      metaReducers: [],
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer,
    }),
  ],
})
export class RootStoreModule {}
