import { useState } from "react";
// import MatchesList from "./MatchesList";
import "./matchPage.css";
import dream11Team from "../../assets/Images/Dream-11-Icon-PNG-Image.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupsIcon from "@mui/icons-material/Groups";
import { Outlet, useNavigate } from "react-router-dom";

const MatchPageHeader = () => {
  const active = {
    borderBottom: "2px solid white",
    width: "80px",
    color: "white",
  };

  const [tabClick, setTabClick] = useState("Cricket");
  const navigate = useNavigate();

  return (
    <div>
      <div className="headerColor">
        <div className="row">
          <div className="col-4">
            <img src={dream11Team} className="dreamLogo" />
          </div>
          <div className="col-4 headTextCenter">
            <b className="headerText">MERN11</b>
          </div>
          <div className="col-4 text-end">
            <b className="headIcons">
              <NotificationsIcon />
              <GroupsIcon />
            </b>
          </div>
        </div>
        <div className="row2">
          <div
            onClick={() => {
              setTabClick("Cricket");
              navigate('/matchPage/cricket');
            }}
            style={tabClick === "Cricket" ? active : {}}
          >
            Cricket
          </div>
          <div
            onClick={() => {
              setTabClick("Kabaddi");
              navigate('/matchPage/kabaddi');
            }}
            style={tabClick === "Kabaddi" ? active : {}}
          >
            Kabaddi
          </div>
          <div
            onClick={() => {
              setTabClick("Football");
              navigate('/matchPage/football');
            }}
            style={tabClick === "Football" ? active : {}}
          >
            Football
          </div>
        </div>
      </div>

      {/* <MatchesList /> */}
      <div className="responsive">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MatchPageHeader;
