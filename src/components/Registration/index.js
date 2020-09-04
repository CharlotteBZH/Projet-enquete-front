import React from 'react';
import './style.scss';

import PropTypes from "prop-types";
import Menu from "../Menu";

const Registration = ({
  // data qui vient du state
  pseudo,
  mail,
  checkMail,
  pwd,
  checkPwd,
  // function qui dispatch
  onInputChange,
  onFormRegistration,
  // data + function Menu
  onOpenMenu,
  open,
  mute,
  onClickMute,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormRegistration();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };
  return (
    <div className="registration">
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

      <h1>Formulaire d'inscription</h1>

      <form
        className="registration-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="pseudo"
          value={pseudo}
          placeholder="Entrez votre pseudo"
          required
          onChange={handleInputChange}
        />
        <input
          type="mail"
          name="mail"
          value={mail}
          placeholder="Entrez votre mail"
          required
          onChange={handleInputChange}
        />
        <input
          type="mail"
          name="checkMail"
          value={checkMail}
          placeholder="Confirmez votre mail"
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
          type="password"
          name="checkPwd"
          value={checkPwd}
          placeholder="Confirmez votre mot de passe"
          required
          onChange={handleInputChange}
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