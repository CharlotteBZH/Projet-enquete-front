import React from 'react';
import './style.scss';
import { Link } from "react-router-dom";

function Log() {
  return (
    <div className="log">


      <div>
        <Link to={`/logon`}> <span className="log-inscription">Incription</span></Link>
         |
      <Link to={`/login`}><span className="log-connexion">Connexion</span></Link>
      </div>
    </div >
  );
}

export default Log;
