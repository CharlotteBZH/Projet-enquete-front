import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './style.scss';

function Alias({ pseudo, isLogged }) {
  return (
    <div className="alias">
      {!isLogged && (
        <div>
          <Link to={`/logon`}> <span className="log-inscription">Incription</span></Link>
         |
          <Link to={`/login`}><span className="log-connexion">Connexion</span></Link>
        </div>
      )}
      {isLogged && (
        <div className="pseudo">
          <span>{pseudo}</span>
          <span><Icon name="user" className="userLogo" /></span>
        </div>
      )
      };

    </div>
  );
};

export default Alias;
