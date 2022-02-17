import style from "./Menu.module.css";
import { FaUserCircle, FaTimes } from "react-icons/fa";

export default function Menu( props ){
  const { show, onHideMenu } = props;

  return(
    <div className={`${style.container} ${show ? style.show : style.hide}`}>
      <div className={style.content}>
        <div className={style.account}>
          <FaUserCircle />
          <p>Regístrate</p>
        </div>
      </div>
      <div className={style.close} onClick={() => onHideMenu()}>
        <FaTimes />
      </div>
    </div>
  );
}