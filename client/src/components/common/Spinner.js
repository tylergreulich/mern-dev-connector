import React from 'react';
import Spinner from './spinner.gif';

const spinner = () => (
  <img
    src={Spinner}
    alt="Loading..."
    style={{ width: '200px', margin: '0 auto', display: 'block' }}
  />
);

export default spinner;
