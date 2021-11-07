
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

   /* const link = useHistory();

    async function login(){
      try {
        const login = document.querySelector("#imp1").value
        const passworld = document.querySelector("#imp2").value
        var bt = document.querySelector("#imp3")
        bt.value = 'carregando...'
        const result = await http.get(`login/list?login=${login}&passworld=${passworld}`);
        bt.value = 'entrar'
        console.log(result.data)
       if(result.data.length == 0) return alert('Usuario ou senha Invalidos!')
       if(result.data.length > 0) {
        alert('logado com sucesso!')
        link.push('home')
       }
      } catch (error) {
        console.error(error)
      }
    }
    */
  return(
     <ContainerAll>
       <TopBox/>
       <SignInBlock/>
    </ContainerAll>  
    

     
  )};
// criar no backend um codigo para criar a senha e deixar ele restrita não pode criar a mesma outra vez

  export default Login; 
