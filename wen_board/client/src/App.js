import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
// import { HashRouter as Switch, Router, Route } from 'react-router-dom'; //React-Router import
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
import routes from './routes';

export default function App(){
    return ( 
        <Router>
        <Header/>
        <NavBar />     
        <div className="container">  
            <Switch>
            {routes.map((route) => {
                return <Route key={route.path} exact path={route.path} component={route.component} />;           
            })}
            </Switch>
        </div>
        <Footer/>
        </Router>   
    );
}
