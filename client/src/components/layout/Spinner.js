import React, { Fragment } from 'react';
import spinner from '../../img/spinner (2).gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'black' }}
        alt='Loading...'
      />
    </Fragment>
  );
};
