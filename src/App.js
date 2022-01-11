import React from 'react';
import Student from './components/Student';
import Faculty from './components/Faculty';
import Final from './components/Final';
import Home from './components/Home'
import Rooms from './components/Rooms'
import Admin from './components/Admin'
import Userlogin from './components/Userlogin'
import Branch from './components/Branch'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
function App() {//`url(${image}`
  return (<>
 
<BrowserRouter>

<Switch>
 <Route exact path="/client" exact component={Home} />
 <Route exact path="/Student" exact component={Student} />
 <Route exact path="/faculty" exact component={Faculty} />
 <Route exact path="/branch" exact component={Branch} />
 <Route exact path="/rooms" exact component={Rooms} />
 <Route exact path="/login" exact component={Userlogin}/>
 <Route exact path="/admin" exact component={Admin}/>
 </Switch>

</BrowserRouter>
</>
  );
}

export default App;
