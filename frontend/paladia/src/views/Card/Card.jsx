import React from 'react'
import classes from './Card.module.css'
import { FaTimes } from "react-icons/fa";
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

        <img className={classes.Image} src={data.image} alt="" />
        <p className={`${classes.Description} ${enlarge && classes.DescriptionActive}`}>
          {data.description}
        </p>

        <div className={`${classes.Info} ${enlarge && classes.InfoActive}`}>
          <h2 className={`${classes.Title} ${enlarge && classes.TitleActive}`}>{data.title}</h2>
          <span className={classes.Category}><strong className={classes.Subtitle}>Género:</strong>{data.category}</span>
          <span className={classes.Price}><strong className={classes.Subtitle}>Precio:</strong>${data.price}</span>
          <div className={classes.Buttons}>
            <button
              className={`${classes.Button} ${enlarge && classes.ButtonActive}`}
              onClick={() => {setEnlarge(true)}}
            >
              Ver detalles
            </button>
            {/* <FaRegStar className={classes.Star} /> */}
          </div>
        </div>

      </div>
      <div className={`${enlarge && classes.Bg}`}></div>
    </>
  )
}

export default Card;