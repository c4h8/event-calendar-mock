import React, { Component } from 'react';
import { connect } from 'react-redux'
import posed, {PoseGroup} from 'react-pose';

import mockData from './mockData';
import mockData3 from './mockData3';

import './Styles/app.scss';
import './Styles/ticket.scss';
import './Styles/listview.scss';
import './Styles/eventDetailModal.scss'

import EventHeader from './Components/EventHeader';

import EventContainer from './Components/EventContainer';
import ListEvent from './Components/EventListView';
import {Navbar} from './Components/Navbar'; // TODO: delete
import EventDetailView from './Components/EventDetailView';
import {setEvents} from './actions';
import CalendarTitle from './Components/CalendarTitle';

import {eventDataAdapter} from './helpers';
import EventListView from './Components/EventListView';

const EventPoser = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
});

const getCategories = (data) => {
  const res = {}
  data.forEach(event => {
    if(event.category) res[event.category] = true;
  });
  return res;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: Object.keys(getCategories(mockData)), 
      activeCategories: getCategories(mockData), 
      eventsFiltered: mockData 
    };
  }

  setCategoryState = (category, categoryState) => {
    const activeCategories = {...this.state.activeCategories, [category]: categoryState}
    const eventsFiltered = mockData.filter(event => activeCategories[event.category])

    this.setState({
      activeCategories,
      eventsFiltered
    });
  }

  componentDidMount = () => {
    this.props.dispatch(setEvents(eventDataAdapter(mockData3)))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <CalendarTitle />
          <EventHeader
            categories={this.state.categories} 
            activeCategories={this.state.activeCategories}
            setCategoryState={this.setCategoryState}
          />
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
