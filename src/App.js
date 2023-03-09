import './App.css';
import Body from './Converter';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from './SignUp';
import Header from './ConverterHeader';
import LandingPageContextProvider from './Context/LandingPageContext';

function App() {
  return (
    <div className="App">
      <LandingPageContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element ={<Body />}/>
              <Route path='signup' element={<SignUp />}/>
            </Route>
          </Routes>
        </Router>
      </LandingPageContextProvider>
    </div>
  );
}

export default App;
