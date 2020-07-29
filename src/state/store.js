import { combineReducers, createStore } from 'redux';

// TODO: Remove the template reducer, we should be listing here all our module reducers and add them to the root reducer
import templateReducer from '../modules/Template/store/reducers';

const rootReducer = combineReducers({
  template: templateReducer,
});

export default createStore(rootReducer);
