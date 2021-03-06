import React from 'react';
import { connect } from 'react-redux'
import posed from 'react-pose';
import { toggleEventCategoty } from '../actions';

const Pressable = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 1.2 }
});

const FilterButton = ({ name, isActive, toggleEventCategoty }) => (
  <Pressable
    className={`c-category-${name} c-badge ${isActive ? '' :'disabled'}`}
    onClick={(e) => {
      e.preventDefault();
      toggleEventCategoty(name)
    }}
  >
    <span>
      {/* {isActive
        ? <i className="material-icons md-24">visibility</i>
        : <i className="material-icons md-24">visibility_off</i>} */}
      {name}
    </span>
  </Pressable>
);

const EventHeader = ({ categories, activeCategories, toggleEventCategoty }) => (
  <div className="row">
    <div className="col-sm-12 clearfix">
      {categories.map(category =>
        <FilterButton
          key={category}
          name={category}
          isActive={activeCategories[category]}
          toggleEventCategoty={toggleEventCategoty}
        />
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
