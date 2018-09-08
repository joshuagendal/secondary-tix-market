import { combineReducers } from 'redux';
import eventsReducer from './events/reducer';

export const rootReducer = combineReducers({
  eventsReducer
});