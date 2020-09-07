import React from 'react';
import './style.scss';

import soundfile from "../../audio/endGame.mp3";
import Menu from "../Menu";
import Alias from '../../containers/Alias';

const End = ({
  onOpenMenu,
  open,
  mute,
  onClickMute,
}) => {
  return (

    <div className="end">
      {/*<div>
        {mute === false && <iframe title="music" src={soundfile} allow="autoplay"></iframe>}
        {mute === true && <iframe title="mute"></iframe>}
      </div>

      <div className="header">
        <div className="menuButton">
          <Menu
            menu={onOpenMenu}
            open={open}
            mute={mute}
            onClickMute={onClickMute}
          />
        </div>
      </div>

      <div className="toLog">
        <Alias />
      </div>*/}

      <div className="resolution">
        <p className="para1">
          Après le restaurant, Lily faisant croire qu'elle se préparait dans sa chambre dans la maison voisine, attira Tonya dehors mais sans que personne ne les voit sortir. La chambre
          de tonya étant près de l'entrée, il fallait qu'elle aille dans sa chambre puis de là, qu'elle l'attire dehors par la porte de devant
          en lui disant qu'elle n'allait pas bien et qu'elle ne voulait pas qu'on la voit entrain de pleurer. Elle prétexta que son petit ami l'avait quitté.
          Une fois dehors, elle éloigna Tonya et lui proposa une balade sur la plage pour pouvoir lui raconter son problème. 
        </p>
        <p className="para2">
          Au bord de la plage, Tonya se plaignit de sa situation avec Yann, disant qu'elle ne savait pas quoi faire pour le journaliste qu'elle avait contacté car Yann 
          était au courant du fait qu'elle avait décidé de le dénoncer. Tonya avoua également avoir encore des sentiments pour
          Dorian et qu'elle ne savait plus quoi faire. Lily s'énerva. Tonya se plaignait trop alors qu'elle avait une vie parfaite, que tout le monde l'aimait ! Alors qu'elle, même ses
          parents n'en n'avaient que faire. Lily avoua vouloir prendre la place de Tonya.
        </p>
        <p className="para3">
        C'est à ce moment là que Lily sortit le couteau de cuisine qu'elle avait caché dans son sac après que je m'en soit servi. Elle avait pris soin de mettre un gant pour qu'il n'y ait 
        pas ses empreintes. Tonya prenant peur lui dit qu'elle était folle, de ne plus s'approcher d'elle. Lily s'énerva, et l'attrapa. Tonya se débattit et se faisant, arracha le collier 
        de Lily sans que celle ci ne s'en rende compte. 
        </p>
        <p className="para4">
        Arrivant à se libérer de l'étreinte de Lily, Tonya s'éloigna à pas rapides, le collier toujours dans son poing serré. Lily la rattrapa et lui enfonça le couteau dans le dos au niveau des poumons.
          Tonya tomba à terre. Elle tenta de crier mais elle avait le souffle coupé et la musique venant de la soirée de la maison etait bien trop forte pour qu'on l'entende.
          
        </p>
        <p className="para5">
        Lily, prise de panique, traîna le corps de Tonya au bord de l'eau dans l'espoir d'effacer les traces de lutte et de se débarasser du corps. Puis elle reparti dans sa maison, se redonna une
          consistance et appela son frère pour qu'ils partent ensemble à la soirée. Plus tard lorsque je l'interrogeais, elle me dira, ainsi qu'à la police, qu'elle était dans sa 
          chambre à se préparer pendant l'heure du meurtre et poussera la police à croire que Yann ou moi même étions les vrais coupables.
        </p>
        <p className="para6">
        Le collier, un cadeau que Tonya lui avait fait, fut le seul dérapage dans son plan impécablement minuté. C'est comme cela que l'étudiante en droit finit derrière les barreaux pour très
          longtemps...
        </p>
      </div>

    </div>

  );
};

export default End;