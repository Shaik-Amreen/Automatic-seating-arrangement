import React from 'react';
import Student from './components/Student';
import Faculty from './components/Faculty';
import Final from './components/Final';
import Home from './components/Home'
import Rooms from './components/Rooms'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
function App() {
  return (
   
<BrowserRouter>
    

<Switch>
 <Route path="/" exact component={Home} />
 <Route path="/Student" exact component={Student} />
 <Route path="/faculty" exact component={Faculty} />
 <Route path="/branch" exact component={Final} />
 <Route path="/rooms" exact component={Rooms} />
 </Switch>

</BrowserRouter>
  );
}

export default App;
