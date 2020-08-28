import React from 'react';
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './style.scss';

function Alias({ pseudo }) {
  return (
    <div className="alias">
      <div className="pseudo">{pseudo}</div>
      <Icon name="user" className="userLogo" />
    </div>
  );
}

export default Alias;
