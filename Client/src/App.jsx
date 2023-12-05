import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const AuthRouting = lazy(()=> import('./pages/auth/authRouting'));
import Home from './components/home';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn'
import MatchPageHeader from './pages/matchPage/matchPageHeader';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth/signUp" element={<SignUp/>} />
          <Route path="auth/signIn" element={<SignIn/>} />
          <Route path="/matchPage" element={<MatchPageHeader/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
