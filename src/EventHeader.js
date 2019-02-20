import React from 'react';
import { connect } from 'react-redux'
import posed from 'react-pose';
import { toggleEventCategoty } from './actions';

const Pressable = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 1.2 }
});

const EventHeader = ({ categories, activeCategories, toggleEventCategoty }) => (
  <div className="row">
    <div className="col-sm-12 clearfix">
      {categories.map(category =>
        <Pressable
          className={`c-category-${category} c-badge ${activeCategories[category] ? '' :'disabled'}`}
          onClick={(e) => {
            e.preventDefault();
            toggleEventCategoty(category)
          }}
        >
          {category}
        </Pressable>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  categories: state.eventCategories || [],
  activeCategories: state.activeEventCategories
})

const mapDispatchToProps = ({
  toggleEventCategoty
})

export default connect(mapStateToProps, mapDispatchToProps)(EventHeader);
