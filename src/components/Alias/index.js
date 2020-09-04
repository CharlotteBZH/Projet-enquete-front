import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './style.scss';

function Alias({ pseudo, isLogged, handleLogout, disconnected }) {
  return (
    <div className="alias">
      {!isLogged && (
        <div className="alias-content">
          <Link to={`/logon`}> <span className="alias-content__inscription">Incription </span></Link>
          |
          <Link to={`/login`}><span className="alias-content__connexion"> Connexion</span></Link>
        </div>
      )}
      {isLogged && (
        <div className="pseudo">
          <span>{pseudo}</span>
          <span><Icon name="user" className="userLogo" /></span>
          | <span>{!disconnected && (
            <span className="decoButton"
              onClick={handleLogout}>
              Déconnexion
            </span>
          )}
          </span>

        </div>
      )
      }
      {disconnected && (
        <Redirect to="/" />
      )}

    </div>
  );
};

export default Alias;