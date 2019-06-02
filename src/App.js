import React, { Component } from 'react';
import { connect } from 'react-redux'
import posed, {PoseGroup} from 'react-pose';

import mockData from './mockData';

import './Styles/app.scss';
import './Styles/ticket.scss';
import './Styles/listview.scss';
import './Styles/eventDetailModal.scss'

import EventHeader from './Components/EventHeader';

import EventContainer from './Components/EventContainer';
import {Navbar} from './Components/Navbar'; // TODO: delete
import EventDetailView from './Components/EventDetailView';
import { loadData } from './actions';
import CalendarTitle from './Components/CalendarTitle'; // TODO: delete

const EventPoser = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
});

class App extends Component {

  componentDidMount = () => {
    this.props.dispatch(loadData())
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <CalendarTitle />
          <EventHeader />
          <div className="row calendar">
            <PoseGroup>
              { this.props.activeEventIds && this.props.activeEventIds.map(eventId => 
                <EventPoser key={eventId} className="col-lg-4 col-md-6 col-sm-12">
                  <EventContainer {...this.props.events[eventId] }/>
                </EventPoser>
              )}
            </PoseGroup> 
            {/* { this.props.activeEventIds && this.props.activeEventIds.map(eventId => 
              <EventListView {...this.props.events[eventId] }/>
            )} */}
          </div>
        </div>
        <EventDetailView />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  activeEventIds: state.activeEventIds
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
