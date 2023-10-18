import React, { useState } from "react"; /* le hook useState pour gérer l'état de l'image affichée et les fonctions pour naviguer entre les images */
import "./Carrousel.scss";
import fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel({images}) {
    /* Crée un Hook d'état - usestate */
    let [imgAfficher, changerImg] = useState(0);
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    const imgSuivante = () => { /* ajouter une acrementation = changer le currentimg */ 
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(

        <div className="carrousel" currentImg="1"> 
            
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {  /* pour parcourir le tableau d'images */
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;