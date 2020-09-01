import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

const Menu = ({ open, menu, mute, onClickMute }) => {
  return (
    <div>
      <div className="menuButton" onClick={menu}>
        Menu
      </div>
      {open && (
        <div>
          <Link to={`/`}>
            <button>Accueil</button>
          </Link>
          <button mute={mute} onClick={onClickMute}>
            Mute
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;

// {opened && loading && <div className="loading">Connexion...</div>}
