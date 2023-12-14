import "./home.css";
import Dream11IconPNGImage from "../assets/Images/Dream-11-Icon-PNG-Image.jpg";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="head">
        <div className="ps-2 mt-1">
        <Link to="/"><img src={Dream11IconPNGImage} height="40" width="50" /></Link>
        </div>
        <div className="dreamHide">
          <h1>Dream11</h1>
        </div>
        <div className="pe-2 mt-2">
        <Link to="/auth/signUp"><button className="btn btn-dark" style={{ marginRight: "20px" }}>Sign Up</button></Link>
        <Link to="/auth/signIn"><button className="btn btn-warning" style={{ marginRight: "20px" }}>Sign In</button></Link>
        </div>
      </div>
    </>
  );
};

export default header;
