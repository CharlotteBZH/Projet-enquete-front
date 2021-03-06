import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Menu from "../Menu";

const Connexion = ({
  // data qui vient du state
  mail,
  pwd,
  pseudo,
  isLogged,
  onOpenMenu,
  open,
  mute,
  onClickMute,
  // function qui dispatch
  onInputChange,
  onFormLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  return (
    <div className="connexion">
      <div className="header">
        <div className="header-menu">
          <Menu
            menu={onOpenMenu}
            open={open}
            mute={mute}
            onClickMute={onClickMute}
          />
        </div>
      </div>

      <h1>Se connecter</h1>

      <form className="connexion-form" onSubmit={handleSubmit}>
        <input
          onFocus
          type="mail"
          name="mail"
          value={mail}
          placeholder="Entrez votre mail"
          required
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="pwd"
          value={pwd}
          placeholder="Entrez votre mot de passe"
          required
          onChange={handleInputChange}
        />

        <input
          className="connexion-form__submit"
          type="submit"
          value="Se connecter"
        />
      </form>
    </div>
  );
};

Connexion.propTypes = {
  mail: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired,
};

export default Connexion;