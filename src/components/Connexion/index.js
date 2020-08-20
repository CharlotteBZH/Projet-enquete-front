import React from 'react';
import './style.scss';

import PropTypes from "prop-types";

const Connexion = ({ mail, pwd, handleSubmit, changeField, handleLogIn}) => {
  return (
    <div className="connexion">
      <h1>Se connecter</h1>

      <form 
      className="connexion-form"
      onSubmit={handleSubmit}
      >

        <input
          type="mail"
          name="mail"
          value={mail}
          placeholder="Entrez votre mail"
          required
          onChange={changeField}
        />

        <input
          type="password"
          name="password"
          value={pwd}
          placeholder="Entrez votre mot de passe"
          required
          onChange={changeField}
        />

        <input className="connexion-form__submit"
          type="submit"
          value="Se connecter"
          onClick={handleLogIn(evt)}
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
