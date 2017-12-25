import { ajax } from 'rxjs/observable/dom/ajax';

import { FETCH_USER } from './actionType';
import { fetchUserFulfilled } from './userActions';

const fetchUserEpic = action$ =>
    action$.ofType(FETCH_USER)
        .mergeMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                .map(response =>
                    fetchUserFulfilled(response)
                )
        );

export { fetchUserEpic };
