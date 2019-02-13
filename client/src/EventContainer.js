import React from 'react';
import posed from 'react-pose';

const Pressable = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.9 }
});

const months = ['', 'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'];

const parseDate = date => {
  if (!date) return ({});

  const parts = date.split('.');
  return ({day: parts[0], month: months[parseInt(parts[1])]})
}

const event = ({ desc, category, price, time, date }) => {
  const {day, month} = parseDate(date);

  return (
    <Pressable className="col-md-12 col-lg-6">
      <div className={`c-aspect-ratio c-category-${category}`} >
        <div className="c-aspect-ratio-inside">
          <div className="c-date-container">
            <p className="c-date-container-month">{month}</p>
            <p className="c-date-container-day">{day}</p>
          </div>
          <div className="c-info-container">
            <p className="c-title">{desc}</p>
            <p>{time && `Klo ${time}`}  {price && time && '/'} {price && `Liput ${price}€`}</p>
          </div>
        </div>
      </div>
    </Pressable>
  )
};

export default event;
