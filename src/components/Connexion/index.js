import React from 'react';
import './style.scss';

function Connexion() {
  return (
    <div className="connexion">
      <h1>Se connecter</h1>

      <form className="registration-form">

        <input
          type="mail"
          value=""
          placeholder="Entrez votre mail"
          required
        />

        <input
          type="text"
          value=""
          placeholder="Entrez votre mot de passe"
          required
        />

        <input className="registration-form__submit"
          type="submit"
          value="Se connecter"
        />
      </form>

    </div>

  );
}

export default Connexion;
