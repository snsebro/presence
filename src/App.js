import './App.css';
import { UserContext } from './context/UserContext'
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { Switch, Route, Redirect } from 'react-router-dom'
import { useContext } from 'react';
import DashBoard from './pages/DashBoard/DashBoard';
import NewEntry from './components/NewEntry/NewEntry';
import AllEntries from './components/AllEntries/AllEntries'
import EntryDetail from './components/EntryDetail/EntryDetail';
import EntryEdit from './components/EntryEdit/EntryEdit';
import Homepage from './pages/Homepage/Homepage';
import Resources from './pages/Resources/Resources';

function App() {
  let { currentUser } = useContext(UserContext)

  return (
    <div className="background">
      <Header/>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <Homepage/>} />
        <Route
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <LoginPage/>} />
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <SignUpPage/>} />
        <Route
          path="/dashboard"
          render={(props) =>
            currentUser ? <DashBoard {...props} /> :<Redirect to="/login" />} />
        <Route
          path="/resources"
          component={Resources} />
        <Route
          path="/new-entry"
          render={(props) =>
            currentUser ? <NewEntry {...props}/> :<Redirect to="/login" />} />
        <Route
          path="/all-entries"
          render={(props) =>
            currentUser ? <AllEntries {...props}/> :<Redirect to="/login" />} />
        <Route
          exact
          path="/entry/:id"
          render={(props) =>
            currentUser ? <EntryDetail {...props}/> :<Redirect to="/login" />} />
        <Route
          path="/entry/:id/edit"
          render={(props) =>
            currentUser ? <EntryEdit {...props}/> :<Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;
