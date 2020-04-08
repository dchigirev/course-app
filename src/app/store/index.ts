
import { ActionReducerMap } from '@ngrx/store';

import * as fromDictionaries from './dictionaries';

export interface State {
    dictionaries: fromDictionaries.DictionariesState;
}

export const reducers: ActionReducerMap<State> = {
    dictionaries: fromDictionaries.reducer
};

export const effects = [
    fromDictionaries.DictionariesEffects
];
