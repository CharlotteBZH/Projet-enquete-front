import React from 'react';
import './style.scss';

function Registration(props) {
  return (
    <div className="registration">
      <h1>Formulaire d'inscription</h1>

      <form>
        <input
          type="text"
          value=""
          placeholder="Entrez votre pseudo"
        />
        <input
          type="mail"
          value=""
          placeholder="Entrez votre mail"
        />
        <input
          type="mail"
          value=""
          placeholder="Confirmez votre mail"
        />
        <input
          type="text"
          value=""
          placeholder="Entrez votre mot de passe"
        />
        <input
          type="text"
          value=""
          placeholder="Confirmez votre mot de passe"
        />
        <input
          type="submit"
          value="S'inscrire"
        />
      </form>

    </div>
  );
}

export default Registration;
