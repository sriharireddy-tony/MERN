import HomeHeader from '../../components/homeHeader';
import {Link} from 'react-router-dom';

const signIn = () => {
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
          />
        </div>
        <div className="col-12">
          <h6 className="regLabel">Password</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
      <div className="regButtons">
        <button className="btn btn-success w-100">SignIn</button>
        <button className="btn btn-outline-danger w-100">Clear</button>
      </div>
      <h6 className="forgotPW">Forgot Password</h6>
      <h6 className="regSignIn">I dont have an account!<Link to="/auth/signUp">SignUp</Link></h6>
    </div>
  </div>
  </>
  )
}

export default signIn