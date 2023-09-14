// Home.js
import React from 'react';
import AvatarYounes from '../src/images/avataryounes.png';

function Home() {
  const containerClass = "home-container";
  return (
    <div className={containerClass}>
      <h1>Accueil</h1>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non libero nec turpis cursus tincidunt. Vestibulum fermentum risus nec urna iaculis, quis bibendum metus gravida. Pellentesque quis justo sapien. Integer sit amet dolor eget tortor posuere suscipit id non sapien. Vivamus euismod tristique velit, non pellentesque dui tempus nec. Suspendisse potenti. Curabitur vitae tellus nec massa consectetur consectetur. Sed malesuada ligula vitae lectus varius, eu feugiat nulla euismod. Vivamus eget dolor nunc. Cras sit amet mauris ligula. Vivamus posuere risus eget libero laoreet, id placerat erat efficitur. Nulla facilisi. Sed elementum, quam nec semper sodales, dolor lectus luctus libero, ut tempus orci elit ut elit. Vivamus tincidunt cursus feugiat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur lacinia purus at arcu scelerisque luctus. Aliquam erat volutpat. Vestibulum nec tincidunt nisi. Sed hendrerit risus non enim tincidunt, nec scelerisque velit egestas. Morbi pharetra bibendum justo nec vulputate. Cras non arcu at justo egestas condimentum vel in urna. Vivamus a massa tortor. Ut quis arcu vestibulum, feugiat elit a, consectetur nunc. Integer laoreet libero quis sollicitudin. Etiam eget libero id erat pharetra ultrices. Vivamus eget facilisis ex, a semper ex. Curabitur sed bibendum nunc. Vivamus vel orci vel elit ultrices egestas id a dui.

</p>
        <img className="AvatarYounes" src={AvatarYounes} alt="Avatar de Younes" />
      </div>
    </div>
  );
}

export default Home;