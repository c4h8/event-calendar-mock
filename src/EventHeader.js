import React from 'react';
import posed from 'react-pose';

const Pressable = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 1.2 }
});

const EventHeader = ({ categories, activeCategories, setCategoryState }) => (
  <div className="row">
  <div className="col-sm-12 clearfix">
    {categories.map(category =>
      <Pressable
        className={`c-category-${category} c-badge ${activeCategories[category] ? '' :'disabled'}`}
        onClick={(e) => {
          e.preventDefault();
          setCategoryState(category, !activeCategories[category])
        }}
      >
        {category}
      </Pressable>
    )}
  </div>
    </div>
)

export default EventHeader;
