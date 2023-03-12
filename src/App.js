import './App.css';
import LandingPage from './Component/LandingPage';
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SignUp, { signupAction } from './Auth/SignUp';
import Header from './Component/Header';
import LandingPageContextProvider from './Context/LandingPageContext';
import Login, { loginAction } from './Auth/Login'
import Dashboard from './Component/Dashboard';
import FormContextProvider from './Context/FormContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element ={<LandingPage />} />
      <Route path='signup' element={<SignUp />} action={signupAction} />
      <Route path='login' element={<Login />} action={loginAction}/>
      <Route path='convert' element={<Dashboard />}/>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <LandingPageContextProvider>
        <FormContextProvider>
          <RouterProvider router={router} />
        </FormContextProvider>
      </LandingPageContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
