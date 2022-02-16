import React from 'react'
import classes from './Card.module.css'

const Card = () => {
  return (
    <div className={classes.Card}>
        <img className={classes.Image} src="http://sobrelibros.net/wp-content/uploads/2010/06/cien_anos_de_soledad.jpg" alt="" />
        <div className={classes.Info}>
            <h2 className={classes.Title}>100 años de soledad</h2>
            <span className={classes.Category}>Realismo mágico</span>
            <span className={classes.Price}>10$</span>
        </div>
    </div>
  )
}

export default Card