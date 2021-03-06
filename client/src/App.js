// imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Cookbook from "./pages/Cookbook"
import Pantry from "./pages/Pantry"
import notFound from "./pages/notFound"
import Navbar from "./components/Navbar"
import Login from './pages/Login/Login'
import Footer from "./components/Footer"
// import Searchbar from "./components/Searchbar"
// import RecipeHeader from "./components/RecipeHeader"
// import ChecklistDropdown from "./components/ChecklistDropdown"

function App() {
    return (
        <Router>
            <div>
            {/* <Navbar /> */}
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/cookbook" component={Cookbook}/>
            <Route exact path="/pantry" component={Pantry}/>
            <Route exact path="/login" component={Login}/>
            <Route component={notFound}/>
            
            </Switch>
            {/* <Footer/> */}
            </div>

        </Router>



    )

}

export default App;