import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//surround the code using router
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/anotherhome">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
