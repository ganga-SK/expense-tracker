import Home from "./Home";
import Navbar from "./Navbar";
import useFetch from "./UseFetch";
import EventDetails from "./EventDetails";
import AddExpense from "./AddExpense";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

  const {data:events} = useFetch("http://localhost:8000/events");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/events/:id">
              <EventDetails events = {events}/>
            </Route>
            <Route path="/create" component={AddExpense} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
