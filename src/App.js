import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//surround the code using router
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
