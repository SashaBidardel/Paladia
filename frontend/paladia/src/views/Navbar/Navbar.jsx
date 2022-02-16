import style from "./Navbar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logop from "../../assets/images/logop.png"



export default function Menu(){
    return(
      <div className={style.container}>
        <div className={style.iconBars}>  <FiAlignJustify/>  </div>
        {/* <img className={style.logo} src={logop} alt="" /> */}
        <h1 className={style.title}>PALADIA</h1>
        <div className={style.containerIcons}>
          <div className={style.iconUser}>  <FaUser/>  </div>
          <div className={style.iconCart}>  <FaShoppingCart/>  </div>
        </div>
      </div>
    );
}


//          <img src={logop} alt="ImagenLogo"/>
