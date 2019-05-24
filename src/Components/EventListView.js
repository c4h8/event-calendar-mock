import React from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux'
const months = ['', 'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'];

const parseDate = date => {
  if (!date) return ({});

  const parts = date.split('.');
  return ({day: parts[0], month: months[parseInt(parts[1])]})
}

const Event = ({ title, category, price, time, date, id, dispatch, imgUrl }) => { 

  const {day, month} = parseDate(date);
  return (
    <div className="col-sm-12 list-event">
      <div className={`list-event-date-container c-category-${category}`}>
          <p className="list-event-date-container-month">{month}</p>
          <p className="list-event-date-container-day">{day}</p>
      </div>
      <div className="list-event--content">
        <p>{title}</p>
        <p>"</p>
        <span></span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(Event);