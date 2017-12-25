import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './root';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
