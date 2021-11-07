import React from "react";
import style from '../screem/stil.module.css';

const imgPeg = `https://assets.nflxext.com/ffe/siteui/vlv3/b70b092f-1760-4498-b462-b4ef19907ec7/34e0206f-032c-4094-8584-631fad7bc796/BR-pt-20211101-popsignuptwoweeks-perspective_alpha_website_small.jpg`



export default function ContainerAll(props){
    return(
        <div id={style.containerall}>
            {props.children}
            <div id={style.filter}></div>
        </div>
    )
};