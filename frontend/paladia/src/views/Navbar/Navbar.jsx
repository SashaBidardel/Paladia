import style from "./Navbar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logop from "../../assets/images/logop.png"



export default function Menu(){
    return(
      <div className={style.container}>
        <div className={style.icon1}>  <FiAlignJustify/>  </div>

        <div className={style.logo}> </div>

        <div className={style.container2}>  <h1 className={style.titulo}>Paladia</h1> </div>
        <div className={style.container3}>
           <div className={style.icon2}>  <FaUser/>  </div>
           <div className={style.icon3}>  <FaShoppingCart/>  </div>
        </div>
      </div>
    );
}


//          <img src={logop} alt="ImagenLogo"/>
