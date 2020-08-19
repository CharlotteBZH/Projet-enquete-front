import React from 'react';
import './style.scss';

import PropTypes from "prop-types";

const Connexion = ({ mail, pwd }) => {
  return (
    <div className="connexion">
      <h1>Se connecter</h1>

      <form className="connexion-form">

        <input
          type="mail"
          value={mail}
          placeholder="Entrez votre mail"
          required
        />

        <input
          type="password"
          value={pwd}
          placeholder="Entrez votre mot de passe"
          required
        />

        <input className="connexion-form__submit"
          type="submit"
          value="Se connecter"
        />
      </form>

    </div>

  );
};

Connexion.propTypes = {
  mail: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired
};

export default Connexion;
