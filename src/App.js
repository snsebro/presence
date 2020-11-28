import './App.css';
import UserContextProvider from './context/UserContext'
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {

  return (
    <UserContextProvider>
      <div>
        <SignUp />
        <SignIn/>
      </div>
    </UserContextProvider>
  );
}

export default App;
