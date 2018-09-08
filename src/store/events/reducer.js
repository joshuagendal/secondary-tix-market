// import initialState from '../initialState';
import {
  FETCHING_EVENTS,
  EVENTS_FETCH_SUCCESS
} from './constants';
import { bindActionCreators } from 'redux';

export default function eventsReducer(state = {}, action) {
  switch (action.type) {
    case EVENTS_FETCH_SUCCESS:
      return {
        events: action.events,
        isLoading: action.isLoading,
        fetchSuccess: action.fetchSuccess
      }
    case FETCHING_EVENTS:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      console.log('DEFAULT STATE BLOCK IN REDUCER');
      return state;
  };
};
