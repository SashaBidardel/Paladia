import style from "./Navbar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar( props ){
  const { onHide } = props;

    return(
      <div className={style.container}>
        <div className={style.iconBars}>  <FiAlignJustify/>  </div>
        {/* <img className={style.logo} src={logop} alt="" /> */}
        <h1 className={style.title} onClick={() => onHide(true)}>PALADIA</h1>
        <div className={style.containerIcons}>
          <div className={style.iconUser}>  <FaUser/>  </div>
          <div className={style.iconCart}>  <FaShoppingCart/>  </div>
        </div>
      </div>
    );
}


//          <img src={logop} alt="ImagenLogo"/>
