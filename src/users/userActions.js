import { FETCH_USER, FETCH_USER_FULFILLED } from './actionType';

const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

export { fetchUser, fetchUserFulfilled };
