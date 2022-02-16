import React from 'react'
import classes from './Card.module.css'

import { FaRegStar } from "react-icons/fa";


const Card = () => {
  return (
    <div className={classes.Card}>
        <img className={classes.Image} src="http://sobrelibros.net/wp-content/uploads/2010/06/cien_anos_de_soledad.jpg" alt="" />
        <div className={classes.Info}>
            <h2 className={classes.Title}>100 años de soledad</h2>
            <span className={classes.Category}><strong className={classes.Subtitle}>Género:</strong>Realismo mágico</span>
            <span className={classes.Price}><strong className={classes.Subtitle}>Precio:</strong>10$</span>
            <button className={classes.Button}>Ver detalles</button>
        </div>
        <FaRegStar className={classes.Star} />
    </div>
  )
}

export default Card