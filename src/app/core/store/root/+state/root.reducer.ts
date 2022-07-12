import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterUrlState } from '../interfaces/router-url-state.interface';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  router: RouterReducerState<RouterUrlState> | null;
}

export const rootReducer: ActionReducerMap<RootState> = {
  router: routerReducer,
};

export const rootInitialState: RootState = {
  router: null,
};
