import "./auth.css";
import HomeHeader from '../../components/homeHeader';
import {Link} from 'react-router-dom';

const signUp = () => {
  return (
    <>
    <HomeHeader />
    <div className="mainDiv">
      <h4>SignUp</h4>
      <div className="formDiv">
        <div className="row">
          <div className="col-6">
            <h6 className="regLabel">Name</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="col-6">
            <h6 className="regLabel">Team Name</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Team Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h6 className="regLabel">Mobile Number</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="col-6">
            <h6 className="regLabel">Email</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h6 className="regLabel">Date of Birth</h6>
            <input
              type="date"
              className="form-control"
              placeholder="Select Date of Birth"
            />
          </div>
          <div className="col-6">
            <h6 className="regLabel">State</h6>
            <select className="form-select">
              <option value="">--select--</option>
              <option value="">Andhra Pradesh</option>
              <option value="">Telangana</option>
              <option value="">Maharastra</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h6 className="regLabel">Password</h6>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="col-6">
            <h6 className="regLabel">Confirm Password</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Confirm Password"
            />
          </div>
        </div>
        <div className="regButtons">
          <button className="btn btn-success w-100">SignUp</button>
          <button className="btn btn-outline-danger w-100">Clear</button>
        </div>
        <h6 className="regSignIn">Already i have an account!<Link to="/auth/signIn">SignIn</Link></h6>
      </div>
    </div>
    </>
  );
};

export default signUp;
