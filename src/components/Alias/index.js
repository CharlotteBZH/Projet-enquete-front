import React from 'react';
import './style.scss';

function Alias({pseudo}) {
  return (
    <div className="alias">
      <div className="pseudo">{pseudo}</div>
    </div>
  );
}

export default Alias;
