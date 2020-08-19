import React from 'react';
import './style.scss';

import PropTypes from "prop-types";

const Registration = ({ pseudo, mail, pwd }) => {
  return (
    <div className="registration">
      <h1>Formulaire d'inscription</h1>

      <form className="registration-form">
        <input
          type="text"
          value={pseudo}
          placeholder="Entrez votre pseudo"
          required
        />
        <input
          type="mail"
          value={mail}
          placeholder="Entrez votre mail"
          required
        />
        <input
          type="mail"
          value={mail}
          placeholder="Confirmez votre mail"
          required
        />
        <input
          type="password"
          value={pwd}
          placeholder="Entrez votre mot de passe"
          required
        />
        <input
          type="password"
          value={pwd}
          placeholder="Confirmez votre mot de passe"
          required
        />
        <input className="registration-form__submit"
          type="submit"
          value="S'inscrire"
        />
      </form>

    </div>
  );
};

Registration.propTypes = {
  pseudo: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired
};

export default Registration;
