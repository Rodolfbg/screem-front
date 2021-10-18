import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
  import Login from "./pages/login/login";
  import principal from "./pages/principal/principalpg";

  const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />        
                <Route path="/home" component={principal} />
                
            </Switch>
        </Router>
    )
};

export default Routes;