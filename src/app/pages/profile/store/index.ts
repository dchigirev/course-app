import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromForm from './form/form.reducer';

export interface ProfileState {
    form: fromForm.FormState;
}

export const reducers: ActionReducerMap<ProfileState> = {
    form: fromForm.reducer
};

export const effects: any[] = [

];

export const getProfileState = createFeatureSelector<ProfileState>('profile');
