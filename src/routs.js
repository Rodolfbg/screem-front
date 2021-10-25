import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  
  import Login from "./pages/login/login";
  import principal from "./pages/principal/principalpg";
  import cadsastro from "./pages/cadastrar/cadastro";
  const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />        
                <Route path="/home" component={principal} />
                <Route path="/cadastrar" component={cadsastro} />
                
            </Switch>
        </Router>
    )
};

export default Routes;