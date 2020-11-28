import './App.css';
import { UserContext } from './context/UserContext'
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { Switch, Route, Redirect } from 'react-router-dom'
import { useContext } from 'react';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  let { currentUser } = useContext(UserContext)

  return (
    <div className="background">
      <Header/>
      <Switch>
        <Route
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/" /> : <LoginPage/>} />
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignUpPage/>} />
        <Route
          path="/dashboard"
          render={() =>
            currentUser ? <DashBoard /> :<Redirect to="/login" />} />
        
      </Switch>
    </div>
  );
}

export default App;
