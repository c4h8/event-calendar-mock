import * as actionsNames from './actionNames';
import service from './service'

export const setEvents = (events) => ({
  type: actionsNames.SET_EVENTS,
  events
});

export const setActiveEvent = (activeEvent) => ({
  type: actionsNames.SET_ACTIVE_EVENT,
  activeEvent
});

export const toggleEventCategoty = (eventCategory) => ({
  type: actionsNames.TOGGLE_EVENT_CATEGORY,
  eventCategory
});

export function loadData() {
  return function(dispatch) {
    //dispatch({ type:actionsNames.LOAD_EVENTS_STARTED });

    return (service.loadData()
      .then(res => dispatch({ 
          type: actionsNames.LOAD_EVENTS_COMPLETED,
          data: res.data
        }))
      .catch(e => dispatch({type: actionsNames.LOAD_EVENTS_FAILED}))
    )
  }
}