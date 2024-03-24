import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onSelected = (f) => f }) => (
  <FaStar onClick={onSelected} color={selected ? 'red' : 'grey'} />
);

export default Star;
