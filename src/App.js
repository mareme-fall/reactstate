// App.js
import React, { Component } from 'react';
import Person from './Person';
import './App.css'; // Importer le fichier CSS


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Bill Gates ',
        bio: 'William Henry Gates III, dit Bill Gates, né le 28 octobre 1955 à Seattle (État de Washington) est un informaticien, entrepreneur et milliardaire américain. Il est connu pour être le cofondateur de Microsoft en 1975 et son principal actionnaire jusqu’en 2014.',
        imgSrc: 'https://th.bing.com/th/id/OIP.T-6NYYUQXT9Z4BgCBJlrkwHaE8?w=230&h=180&c=7&r=0&o=5&pid=1.7',
        profession: 'Développeur',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    // Démarrer l'intervalle de temps dès que le composant est monté
    this.startElapsedTimeInterval();
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.intervalId);
  }

  // Méthode pour démarrer l'intervalle de temps
  startElapsedTimeInterval() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1); // Mettez l'intervalle que vous souhaitez ici 
  }

  // Méthode pour basculer l'état "show"
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

render() {
  const { person, show, elapsedTime } = this.state;
  const elapsedMinutes = Math.floor(elapsedTime / 60); // Convertir en minutes

  return (
    <div className="container">
      <h1>Profil de la personne</h1>
      <button onClick={this.toggleShow}>
        {show ? 'Masquer le profil' : 'Afficher le profil'}
      </button>

      {show && (
        <div className="person-container">
          {/* Utiliser le composant Person pour afficher les détails */}
          <Person {...person} />
          <p className="elapsed-time">Temps écoulé: {elapsedMinutes} minutes</p>
        </div>
      )}
    </div>
  );
}
}

export default App;