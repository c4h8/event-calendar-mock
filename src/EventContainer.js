import React from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux'

import {setActiveEvent} from './actions';

const Pressable = posed.div({
  pressable: true,
  hoverable: true,
  init: { scale: 1 },
  press: { scale: 0.90 },
  hover: { scale: 1.05, zIndex: 100 },
});

const months = ['', 'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'];

const parseDate = date => {
  if (!date) return ({});

  const parts = date.split('.');
  return ({day: parts[0], month: months[parseInt(parts[1])]})
}

const Event = ({ desc, category, price, time, date, id, dispatch, imgUrl }) => {
  const {day, month} = parseDate(date);

  return (
    <Pressable
      className={`c-aspect-ratio inner-round`}
      onClick={() => {
        dispatch(setActiveEvent(id))} 
      }
    >
      <div className="c-aspect-ratio-inside">
        <div className="c-ticket">
          <div className={`c-date-container c-category-${category}`}>
            <p className="c-date-container-month">{month}</p>
            <p className="c-date-container-day">{day}</p>
          </div>
          <div className="c-info-container">
            { imgUrl 
             ? <img className="c-ticket-image" src={imgUrl} />
             : null
            }
            <p className="c-title">{desc}</p>
            <p>{time && `Klo ${time}`}  {price && time && '/'} {price && `Liput ${price}€`}</p>
          </div>
        </div>
      </div>
    </Pressable>
  )
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(Event);
