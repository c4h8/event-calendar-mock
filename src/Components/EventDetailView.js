import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux'

import {setActiveEvent} from '../actions';

const modalStyle = ({
  display: 'block',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  heigh: '100vh',
  // maxWidth: '100vw',
  // maxHeigh: '100vh',
  background: 'rgba(0, 0, 0, 0.8)',
  overflow: 'hidden'
})

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 25 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});


const EventDetailView = ({ event: { title, category, price, time, date, id, description, startTime, endTime, imgUrl, ticketLink } = {}, isVisible, dispatch }) => (
  <PoseGroup>
    {isVisible && 
      <Shade
        key="event-modal"
        className="modal"
        tabIndex="-1" role="dialog"
        style={modalStyle}
        onClick={() => dispatch(setActiveEvent())}
      > 
        <Modal onClick={(e) => {e.stopPropagation()}}> 
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title f-oswald">
                  {title}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => dispatch(setActiveEvent())}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ta-left event-modal-body">
                <div className="row">
                  <div className="event-modal-info col-md-4 col-sm-12">
                    {date
                      ? <p>{`${date}`} </p>
                      : null}
                    {time
                      ? <p>{`Klo ${time}`}</p>
                      : null}
                    {startTime
                      ? <p>{`Klo ${startTime}`}{endTime ? ` - ${endTime}`: ""}</p>
                      : null}
                    {price
                      ? <p>{`Liput ${price}€`}</p>
                      : null}
                    {ticketLink
                      ? <a className="btn btn-info" href={ticketLink} target="_blank">Ennakkoliput <i class="material-icons">shopping_cart</i></a>
                      : null}
                  </div>
                  <div className="col-md-8 col-sm-12 event-modal-image">
                    <img src={imgUrl} alt={`${title}`} />
                  </div>
                  <div className="col-md-12 col-sm-12 event-modal-description">
                    <span>{description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Shade>
    }
  </PoseGroup>
);

const mapStateToProps = state => ({
  isVisible: state.activeEvent,
  event: state.activeEvent ? state.events[state.activeEvent] : undefined
});

const mapDisptachToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDisptachToProps)(EventDetailView)