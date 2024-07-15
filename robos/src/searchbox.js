// SearchBox.js

import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='input-box tc'>
      <input
        className='pa3 ba b--blue bg-lightest-blue f4' // Added f4 class for font size
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
        style={{ width: '300px',height:'50px' }} // Optional: Adjust width as needed
      />
    </div>
  );
}

export default SearchBox;
