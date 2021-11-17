import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

  import Login from "./pages/login/login";
  import principal from "../src/pages/principal/menuFlix";
  import perfil from "./pages/perfils/perfilAcess";

  
  
  const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/Login" component={Login} />        
                <Route path="/principal" component={principal} />
                <Route path="/perfil" component={perfil} />
                
            </Switch>
        </Router>
    )
};

export default Routes;