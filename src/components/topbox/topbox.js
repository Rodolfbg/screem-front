import react from "react";
import style from '../topbox/stilbox.module.css';
import logoflix from '../../img/flix.png';



export default function TopBox(){
    return(
        <div id={style.box}>
            <img id={style.logofl} srcSet={logoflix} ></img>
        </div>
    )
};