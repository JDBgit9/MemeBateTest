import user from './components/Nav/containers/ProfilePage';
import Home from './components/Home';
import Login from './components/Login';
import Home from './components/Home/Home';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth, // how to get the user state
    predicate: (auth) => auth.isAuthenticated, // function to run against the auth state to determine if authenticated
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
  });

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={LogoutPage}/>

    <Route path="/profile" component={ProfilePage}/>

    <Route path="/about" component={AboutUs}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);