import './App.css';
import LandingPage from './Component/Converter';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from './Auth/SignUp';
import Header from './Component/ConverterHeader';
import LandingPageContextProvider from './Context/LandingPageContext';

function App() {
  return (
    <div className="App">
      <LandingPageContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element ={<LandingPage />}/>
              <Route path='signup' element={<SignUp />}/>
            </Route>
          </Routes>
        </Router>
      </LandingPageContextProvider>
    </div>
  );
}

export default App;
