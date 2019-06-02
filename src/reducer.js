
import * as actions from './actionNames';
import {eventDataAdapter} from './helpers';



const parseData = (state, data) => {
  const res = ({})


  const events = eventDataAdapter(data.tapahtumat).map((tapahtuma, i) => ({
    ...tapahtuma,
    id: i
  }));

  const eventCategories = data.kategoriat.map(category => category.tapahtumaKategoria);
  const activeEventCategories = eventCategories.map(category => ( {[`${category}`]: true} ));


  events.forEach(event => {
    res[event.id] = event;
    activeEventCategories[event.category] = true;
  });

  const eventIds = events.map(e => e.id);

  return {
    ...state,
    events,
    activeEventIds: eventIds,
    eventIds,
    eventCategories,
    activeEventCategories
  };
}

const toggleCategory = (state, category) => {
  const activeEventCategories = {...state.activeEventCategories, [category]: !state.activeEventCategories[category]};
  const activeEventIds = state.eventIds
    .filter(id => state.events[id].category && activeEventCategories[state.events[id].category])

  return ({
    ...state,
    activeEventCategories,
    activeEventIds
  })
}


const setActiveEvent = (state, action) => ({ ...state, activeEvent: action.activeEvent });


function reducer(state = ({}), action) {
  switch (action.type) {
    case actions.SET_EVENTS:  // TODO: delete
      return state
    case actions.SET_ACTIVE_EVENT:
      return setActiveEvent(state, action)
    case actions.TOGGLE_EVENT_CATEGORY:
      return toggleCategory(state, action.eventCategory)
    case actions.LOAD_EVENTS_COMPLETED:
      return parseData(state, action.data)
    default:
      return state
  }
}

export default reducer;
