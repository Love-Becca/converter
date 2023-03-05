import './App.css';
import Body from './Converter';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element ={<Body />}/>
          <Route path='signup' element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
