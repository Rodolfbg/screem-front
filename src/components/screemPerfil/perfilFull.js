import React from "react";
import style from '../screemPerfil/perfilFull.module.css';

export default function PerfilFull(props){
    return(
        <div id={style.perfil}>
            {props.children}
        </div>

    )
};