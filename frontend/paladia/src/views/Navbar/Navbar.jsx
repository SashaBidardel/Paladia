import style from "./Navbar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Menu from "./components/Menu/Menu.jsx";

export default function Navbar( props ){
  const { onHide } = props;
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const hideMenu = () => {
    setToggle(false);
  }

    return(
      <>
        <div className={`${style.container} ${toggle && style.containerShadow}`}>
          <div 
            className={`${style.iconBars} ${style.buttons}`}
            onClick={() => handleToggle()}
          >
            <FiAlignJustify />
          </div>
          {/* <img className={style.logo} src={logop} alt="" /> */}
          <h1 className={`${style.title} ${style.buttons}`} onClick={() => onHide(true)}>PALADIA</h1>
          <div className={style.containerIcons}>
            <div className={`${style.iconCart} ${style.buttons}`}>  <FaShoppingCart/>  </div>
          </div>
          <Menu show={toggle} onHideMenu={hideMenu} />
        </div>
        <div className={`${style.bg} ${toggle ? style.showShadow : style.hideShadow}`}></div>
      </>
      
    );
}

