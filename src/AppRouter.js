import { Route, NavLink, Switch } from 'react-router-dom';
import { Home, About, Events, Contact } from './pages';

function AppRouter() {
  return (
    <>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/about'>
        <button>About</button>
      </NavLink>
      <NavLink to='/events'>
        <button>Events</button>
      </NavLink>
      <NavLink to='/contacts'>
        <button>Contacts</button>
      </NavLink>
      <hr></hr>
      <h1>Navbar</h1>
      <hr></hr>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/events'>
          <Events />
        </Route>
        <Route exact path='/contacts'>
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
