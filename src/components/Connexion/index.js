import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Menu from "../../containers/Menu";

const Connexion = ({
  // data qui vient du state
  mail,
  pwd,
  pseudo,
  isLogged,
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
      <Menu />
      <h1>Se connecter</h1>

      <form className="connexion-form" onSubmit={handleSubmit}>
        <input
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
