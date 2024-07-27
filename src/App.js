import Home from "./Home";
import Navbar from "./Navbar";
import AddExpense from "./AddExpense";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/create" component={AddExpense} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
