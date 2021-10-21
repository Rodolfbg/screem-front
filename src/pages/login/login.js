import './loginCss.css';
import http from '../../service/api'
import {
   useHistory
  } from "react-router-dom";

function Login(){

    const link = useHistory();

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
   
  return(
      <div id="full">
  
          <div id="add">
              <input id="imp1" type="text" placeholder="Login"></input>
              <input id="imp2" type="text" placeholder="passworld"></input>
              <input id="imp3" onClick={login} type="button" value="Entar"></input>
              <a href="/cadastrar">cadastrar</a>
          </div>

      </div>
  )};
// criar no backend um codigo para criar a senha e deixar ele restrita não pode criar a mesma outra vez

  export default Login; 
