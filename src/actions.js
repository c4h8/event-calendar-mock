import * as actionsNames from './actionNames';

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
