// Card.js

import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='card bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?500x500`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
