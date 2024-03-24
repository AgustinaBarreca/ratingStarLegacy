import React, { Component } from 'react';
import { createArray } from './util';
import Star from './Star.js';

const styleDefault = {
  display: 'flex',
  listStyle: 'none',
  padding: 0,
};

export default class RatingStarLegacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStar: 0,
    };
  }

  setSelectedStar = (selectedStar) => {
    this.setState({ selectedStar });
    //this.setState((state,props) => newState)
  };

  render() {
    const { style = {}, totalStars = 5, ...otherProps } = this.props;
    const stars = createArray(totalStars);
    return (
      <>
        <ul style={{ ...styleDefault, ...style }} {...otherProps}>
          {stars.map((_, i) => (
            <li key={i}>
              <Star
                selected={i < selectedStar}
                onSelected={() => setSelectedStar(i + 1)}
              />
            </li>
          ))}
        </ul>
        {selectedStar} of {totalStars}
      </>
    );
  }
}
