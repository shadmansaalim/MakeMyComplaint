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

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/stores">
              <Stores></Stores>
            </Route>
            <Route exact path="/register-store">
              <RegisterStore></RegisterStore>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
