import React from 'react';

const EventHeader = ({ categories, activeCategories, setCategoryState }) => (
  <div className="row">
  <div className="col-sm-12 clearfix">
    {categories.map(category =>
      <a
        className={`c-category-${category} c-badge ${activeCategories[category] ? '' :'disabled'}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setCategoryState(category, !activeCategories[category])
        }}
      >
        {category}
      </a>
    )}
  </div>
    </div>
)

export default EventHeader;
