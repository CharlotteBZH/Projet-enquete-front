import React from 'react';
import './style.scss';
import { Link } from "react-router-dom";

import Alias from '../../containers/Alias';

const Log = ({ connected, pseudo }) => {
  return (
    <div className="log">
      {!connected &&
        <div>
          <Link to={`/logon`}> <span className="log-inscription">Incription</span></Link>
         |
        <Link to={`/login`}><span className="log-connexion">Connexion</span></Link>
        </div>
      }
      {connected && pseudo &&
        <div><Alias /></div>
      }
    </div >
  );
}

export default Log;
