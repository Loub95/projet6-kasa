import React from "react";
import "./Accueil.scss";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/img/Pages/Accueil/Banniere.png";
import { NavLink } from "react-router-dom";
import Tuile from "../../components/Tuile/Tuile"; // quand je met tuile une fois ca ne marche pas 
import ListeLogements from "../../assets/api/logements.json";

function Accueil() {
    return(
        <div className="Accueil">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Tuile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;