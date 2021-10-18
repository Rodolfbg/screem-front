import './loginCss.css';
import {
   useHistory
  } from "react-router-dom";

function Login(){

    const link = useHistory();
   
  return(
      <div id="full">
  
          <div id="add">
              <input id="imp1" type="text" placeholder="Login"></input>
              <input id="imp2" type="text" placeholder="passworld"></input>
              <input id="imp3" type="button" value="Entar"></input>
          </div>

      </div>
  )};
// criar no backend um codigo para criar a senha e deixar ele restrita não pode criar a mesma outra vez

  export default Login; 
