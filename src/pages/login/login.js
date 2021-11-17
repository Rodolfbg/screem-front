
//import http from '../../service/api'
import React from "react";
import {
  Link,
   useHistory
  } from "react-router-dom";

import ContainerAll from "../../components/screem/screem";
import SignInBlock from "../../components/signin/sign_conect";
import TopBox from "../../components/topbox/topbox";

function Login(){

  
  return(
     <ContainerAll>
       <TopBox/>
       <SignInBlock/>
    </ContainerAll>  
    

     
  )};


  export default Login; 
