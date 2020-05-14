import React from 'react';
import { Link, Redirect, Router, navigate } from '@reach/router';
import './App.css';
import Launches from './views/Launches';
import NotFound from './views/NotFound';
import SingleLaunch from './views/SingleLaunch';


function App() {
  return (
    <div className="App">
{/* this will be our navigation link that will take us to different places */}
      <Link to="/">Home</Link> {' '}
      <Link to="launches">Launches</Link> {' '}
      <Link to="bunk">Information doesn't exist</Link>
      <button onClick={()=> navigate ('/bunk')}>Go to Bunk</button>
      {/* what each individual content route to be */}
      <Router>
{/* when we hit path 'launches' we want to render Launches components */}
{/* each component connected to specific view or url pattern */}
        <Launches path="launches"/>
        <SingleLaunch path="launches/:id" />
        {/* redirect will throw an error if you dont include noThrow prop */}
        <Redirect 
        from="/" to=
        "/launches"
      // if we hit a route that doesnt exist expect for 404 error message
      // dont throw me error instead send me to the launches route 
        noThrow/>
{/* //if none of the routes match i wil come down to my not found default */}
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;
