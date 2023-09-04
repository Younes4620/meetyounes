// Home.js
import React from 'react';
import AvatarYounes from '../src/images/avataryounes.png'
function Home() {
  const containerClass = "home-container";
  return (
    <div className={containerClass}>
      <h1>Accueil</h1>
      <div>
      <img src={AvatarYounes} alt="Avatar de Younes" />
    </div>
    </div>
  );
}

export default Home;