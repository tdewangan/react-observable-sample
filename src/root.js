import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import 'rxjs';

import { fetchUserEpic } from './users/userEpic';
import { users } from './users/userReducers';

export const rootEpic = combineEpics(
    fetchUserEpic
);

export const rootReducer = combineReducers({
    users
});
