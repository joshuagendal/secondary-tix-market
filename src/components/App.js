import React, { Component } from 'react';
import { fetchEvents } from '../store/events/actions';
import { connect } from 'react-redux';
// import { EVENTS_FETCH_SUCCESS, FETCHING_EVENTS } from '../actions/constants';
import axios from 'axios';
// import Form from "./Form";
// import Image from "./Image";
// import unsplash from "../services/unsplash";

export class App extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>HEY</div>
    );
  }

}

const mapStateToProps = state => {
  return {
    events: state.events,
    isLoading: state.isLoading,
    fetchSuccess: state.fetchSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents());
    }
  }
}

  // return {
  //   setEvents: (events) => (
  //     {
  //       type: EVENTS_FETCH_SUCCESS,
  //       events: events,
  //       isLoading: false,
  //       fetchSuccess: true
  //     }
  //   ),
  //   eventsLoading: () => (
  //     {
  //       type: FETCHING_EVENTS,
  //       isLoading: true
  //     }
  //   ),
  //   fetchEvents: () => {
  //     console.log('HgjhghghjjhghjgghjgEYYYY')

  //     return dispatch => {
  //       dispatch(this.props.eventsLoading());
  //       console.log('YYYY')
  //       const events = axios.get('https://api.seatgeek.com/2/events?performers.slug=beck&client_id=ODI3MTg3NXwxNTM1MTM0NTYwLjkz')
  //         .then(response => {
  //           dispatch(this.props.setEvents(response.data.events))
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //       // dispatch(this.props.setEvents(events));
  //       // return getBeckEvents
  //       // 	.then(response => { 
  //       //     const events = response;
  //       //     dispatch(setEvents(events));
  //       // 	})
  //       // 	.catch(err => {
  //       // 		console.log('ERROR!!!!', err);
  //       // 	});
  //     }
  //   }
  // };


export default connect(mapStateToProps, mapDispatchToProps)(App);

