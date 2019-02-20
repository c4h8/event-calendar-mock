
import * as actions from './actionNames';



const parseEvents = (state, events) => {
  const res = ({})
  const activeEventCategories = ({})

  events.forEach(event => {
    res[event.id] = event;
    activeEventCategories[event.category] = true;
  });

  const eventCategories = Object.keys(activeEventCategories);

  const eventIds = events.map(e => e.id);

  return {
    ...state,
    events: res,
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
    case actions.SET_EVENTS:
      return parseEvents(state, action.events)
    case actions.SET_ACTIVE_EVENT:
      return setActiveEvent(state, action)
    case actions.TOGGLE_EVENT_CATEGORY:
      return toggleCategory(state, action.eventCategory)
    default:
      return state
  }
}

export default reducer;
