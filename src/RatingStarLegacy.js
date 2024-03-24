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

  setSelectedStar = (selectedStar2) => {
    this.setState({ selectedStar: selectedStar2 });
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
                selected={i < this.state.selectedStar}
                onSelected={() => this.setSelectedStar(i + 1)}
              />
            </li>
          ))}
        </ul>
        {this.state.selectedStar} of {totalStars}
      </>
    );
  }
}
