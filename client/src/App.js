import React, { Component } from 'react';
import mockData from './mockData';
import EventContainer from './EventContainer';

import './App.css';
import EventHeader from './EventHeader';

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
  
  
  // this.setState(old => ({
  //   activeCategories: {...old.activeCategories, [category]: categoryState},
  //   eventsFiltered: mockData.filter(event => activeCategories[event.category])
  // }));

  render() {
    return (
      <div className="App">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">tahaphtumat <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">historia </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
          <div className="col-sm-12" style={{margin: '30px 0px 15px 0px'}}>
            <h3>Tapahtumat</h3>
          </div>
          </div>
          <EventHeader
            categories={this.state.categories} 
            activeCategories={this.state.activeCategories}
            setCategoryState={this.setCategoryState}
          />
          <div className="row calendar">
            { this.state.eventsFiltered.map(event => 
              <EventContainer {...event}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
