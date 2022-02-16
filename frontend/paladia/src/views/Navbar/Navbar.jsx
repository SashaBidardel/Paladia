import style from "./Navbar.module.css";
import { FiAlignJustify } from "react-icons/fi"

export default function Menu(){
    return(
      <div className={style.container}>
        <div className={style.icon}>  <FiAlignJustify/>  </div>
      </div>
    );
}