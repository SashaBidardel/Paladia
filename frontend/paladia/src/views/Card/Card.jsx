import React from 'react'
import classes from './Card.module.css'
import { FaRegStar, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Card = ( props ) => {
  const { data } = props;
  const [ enlarge, setEnlarge ] = useState(false);

  return (
    <>
      <div className={`${classes.Card} ${enlarge && classes.EnlargeActive}`}>
      <div 
        className={`${classes.Close} ${enlarge && classes.CloseActive}`}
        onClick={() => setEnlarge(false)}
      >
        <FaTimes />
      </div>
        <img className={classes.Image} src="http://sobrelibros.net/wp-content/uploads/2010/06/cien_anos_de_soledad.jpg" alt="" />
        <div className={`${classes.Info} ${enlarge && classes.InfoActive}`}>
          <h2 className={classes.Title}>100 años de soledad</h2>
          <span className={classes.Category}><strong className={classes.Subtitle}>Género:</strong>Realismo mágico</span>
          <span className={classes.Price}><strong className={classes.Subtitle}>Precio:</strong>10$</span>
          <p
            className={`${classes.Description} ${enlarge && classes.DescriptionActive}`}
          >
            <strong>Descripción:</strong>fdsdf lkadml alkdm asldkmañksd lkansdkla sdlkansd lkadnlma sdkñamsd aldnkas d
          </p>
          <div className={classes.Buttons}>
            <button 
              className={`${classes.Button} ${enlarge && classes.ButtonActive}`}
              onClick={() => {setEnlarge(true)}}
            >
              Ver detalles
            </button>
            <FaRegStar className={classes.Star} />
          </div>
        </div>
      </div>
      <div className={`${enlarge && classes.Bg}`}></div>
    </>
  )
}

export default Card