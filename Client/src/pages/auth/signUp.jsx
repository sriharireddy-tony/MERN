import "./auth.css";
import HomeHeader from "../../components/homeHeader";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    teamName: "",
    mobileNo: "",
    email: "",
    DOB: "",
    state: "",
    password: "",
    confPassword: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !credentials.name ||
        !credentials.teamName ||
        !credentials.mobileNo ||
        !credentials.email ||
        !credentials.DOB ||
        !credentials.state ||
        !credentials.password ||
        !credentials.confPassword
      ) {
        alert("Enter all mandatory fields!");
        setisSubmitted(true);
      } else if (credentials.password != credentials.confPassword) {
        alert("Passwords must match!");
        // setCredentials((prevCredentials) => ({
        //   ...prevCredentials,
        //   confPassword: '',
        // }));
        setCredentials({ ...credentials, ["confPassword"]: "" });
      } else {
        // eslint-disable-next-line no-unused-vars
        const { confPassword, ...payload } = credentials;
        const sendSignUp = await axios.post(
          "http://localhost:3000/auth/signUp",
          payload
        );
        const response = await sendSignUp.data;
        alert(response.message);
        navigate("/auth/signIn");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };
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
                name="name"
                style={{
                  borderColor: isSubmitted && !credentials.name ? "red" : "",
                }}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-6">
              <h6 className="regLabel">Team Name</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Team Name"
                name="teamName"
                style={{
                  borderColor:
                    isSubmitted && !credentials.teamName ? "red" : "",
                }}
                onChange={handleOnChange}
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
                name="mobileNo"
                style={{
                  borderColor:
                    isSubmitted && !credentials.mobileNo ? "red" : "",
                }}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-6">
              <h6 className="regLabel">Email</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                style={{
                  borderColor: isSubmitted && !credentials.email ? "red" : "",
                }}
                onChange={handleOnChange}
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
                name="DOB"
                style={{
                  borderColor: isSubmitted && !credentials.DOB ? "red" : "",
                }}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-6">
              <h6 className="regLabel">State</h6>
              <select
                className="form-select"
                name="state"
                style={{
                  borderColor: isSubmitted && !credentials.state ? "red" : "",
                }}
                onChange={handleOnChange}
              >
                <option value="">--select--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Maharastra">Maharastra</option>
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
                name="password"
                style={{
                  borderColor:
                    isSubmitted && !credentials.password ? "red" : "",
                }}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-6">
              <h6 className="regLabel">Confirm Password</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Confirm Password"
                name="confPassword"
                value={credentials.confPassword}
                style={{
                  borderColor:
                    isSubmitted && !credentials.confPassword ? "red" : "",
                }}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="regButtons">
            <button
              className="btn btn-success w-100"
              type="button"
              onClick={handleSubmit}
            >
              SignUp
            </button>
            <button className="btn btn-outline-danger w-100">Clear</button>
          </div>
          <h6 className="regSignIn">
            Already i have an account!<Link to="/auth/signIn">SignIn</Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default SignUp;
