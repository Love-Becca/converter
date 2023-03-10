import './App.css';
import LandingPage from './Component/LandingPage';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from './Auth/SignUp';
import Header from './Component/Header';
import LandingPageContextProvider from './Context/LandingPageContext';
import Login from './Auth/Login'
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <LandingPageContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element ={<LandingPage />}/>
              <Route path='signup' element={<SignUp />}/>
              <Route path='login' element={<Login />}/>
              <Route path='convert' element={<Dashboard />}/>
            </Route>
          </Routes>
        </Router>
      </LandingPageContextProvider>
    </div>
  );
}

export default App;
