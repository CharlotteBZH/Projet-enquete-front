import React from 'react';
import './style.scss';

const Registration = (props) => {
  return (
    <div className="registration">
      <h1>Formulaire d'inscription</h1>

      <form className="registration-form">
        <input
          type="text"
          value=""
          placeholder="Entrez votre pseudo"
          required
        />
        <input
          type="mail"
          value=""
          placeholder="Entrez votre mail"
          required
        />
        <input
          type="mail"
          value=""
          placeholder="Confirmez votre mail"
          required
        />
        <input
          type="text"
          value=""
          placeholder="Entrez votre mot de passe"
          required
        />
        <input
          type="text"
          value=""
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
}

export default Registration;
