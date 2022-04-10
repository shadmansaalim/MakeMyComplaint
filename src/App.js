import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ContextProvider from './context/ContextProvider';
import Stores from './components/Stores/Stores';
import RegisterStore from './components/RegisterStore/RegisterStore';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import StoreDetails from './components/StoreDetails/StoreDetails';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/stores">
                <Header></Header>
                <Stores></Stores>
                <Footer></Footer>
              </Route>
              <Route exact path="/store/:id">
                <Header></Header>
                <StoreDetails></StoreDetails>
                <Footer></Footer>
              </Route>
              <PrivateRoute exact path="/register-store">
                <Header></Header>
                <RegisterStore></RegisterStore>
                <Footer></Footer>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
            </Switch>
          </ScrollToTop>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
