import React, { Component } from 'react';
import { connect } from 'react-redux'
import posed, {PoseGroup} from 'react-pose';

import mockData from './mockData';
import EventContainer from './EventContainer';

import './Styles/app.scss';
import './Styles/ticket.scss';
import EventHeader from './EventHeader';

import {Navbar} from './Components/Navbar';
import EventDetailView from './Components/EventDetailView';
import {setEvents} from './actions';
import CalendarTitle from './Components/CalendarTitle';



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
    this.props.dispatch(setEvents(mockData))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
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
