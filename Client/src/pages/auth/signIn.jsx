import { useState } from 'react';
import HomeHeader from '../../components/homeHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", loginpassword: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSignIn = async () => {
    try {
      if (!credentials.email || !credentials.loginpassword) {
        alert('Enter all mandatory fields!');
        setIsSubmitted(true);
      } else {
        const sendSignIn = await axios.post('http://localhost:3000/auth/signIn', credentials);
        const response = sendSignIn.data;
        alert(response.message);
        navigate('/matchPage/cricket');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <HomeHeader />
      <div className="mainSignInDiv">
        <h4>SignIn</h4>
        <div className="formDiv">
          <div className="col-12">
            <h6 className="regLabel">Mobile Number</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              style={{ borderColor: isSubmitted && !credentials.email ? 'red' : '' }}
              onChange={(e) => {
                setCredentials({ ...credentials, email: e.target.value })
              }}
            />
          </div>
          <div className="col-12">
            <h6 className="regLabel">Password</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              style={{ borderColor: isSubmitted && !credentials.loginpassword ? 'red' : '' }}
              onChange={(e) => {
                setCredentials({ ...credentials, loginpassword: e.target.value })
              }}
            />
          </div>
          <div className="regButtons">
            <button type='button' className="btn btn-success w-100" onClick={handleSignIn}>SignIn</button>
            <button type='button' className="btn btn-outline-danger w-100">Clear</button>
          </div>
          <h6 className="forgotPW">Forgot Password</h6>
          <h6 className="regSignIn">I dont have an account!<Link to="/auth/signUp">SignUp</Link></h6>
        </div>
      </div>
    </>
  )
}

export default SignIn