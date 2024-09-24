import React from 'react';

function FontSizeButtons({ increaseFontSize, decreaseFontSize }) {
  return (
    <>
      <button onClick={decreaseFontSize}>-</button>
      <button onClick={increaseFontSize}>+</button>
    </>
  );
}

export default FontSizeButtons;
