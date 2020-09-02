import React from "react";
// import { Link } from "react-router-dom";
//import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

//import Menu from "../../containers/Menu";

const Menu = ({ open, menu }) => {
  return (
    <div>
      <div className="menuButton" onClick={menu}>
        Menu
      </div>
      {open && (
        <div className="buttonOnMenu">
          <button>Accueil</button>
          <button>Mute</button>
          <button>Notebook</button>
        </div>
      )}
    </div>
  );
};

export default Menu;

// {opened && loading && <div className="loading">Connexion...</div>}
