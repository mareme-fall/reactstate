// Person.js
import React, { Component } from 'react';

// Composant réutilisable pour afficher les détails d'une personne
class Person extends Component {
    render() {
        const { fullName, bio, imgSrc, profession } = this.props;

        return (
            <div>
                <h2>{fullName}</h2>
                <p>{bio}</p>
                <p>Profession: {profession}</p>
                <img src={imgSrc} alt={fullName} />
            </div>
        );
    }
}

export default Person;
