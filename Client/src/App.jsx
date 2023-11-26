import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const AuthRouting = lazy(()=> import('./pages/auth/authRouting'));
import Home from './components/home';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn'

function App() {
  return (
    <div >
      <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth/signUp" element={<SignUp/>} />
          <Route path="auth/signIn" element={<SignIn/>} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </div>
  )
}

export default App
