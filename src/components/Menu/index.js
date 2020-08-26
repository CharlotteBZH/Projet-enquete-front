import React from "react";
// import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

//import Menu from "../../containers/Menu";

const Menu = ({toto}) => {
  return (
    <div>
      <button className="menuButton" onClick={toto}>
        Menu
      </button>
    </div>
  );
};

export default Menu;
