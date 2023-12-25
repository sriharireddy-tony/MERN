import React from "react";
import "./admin.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import GamesIcon from "@mui/icons-material/Games";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ViewListIcon from "@mui/icons-material/ViewList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from 'react-router-dom';

const SidebarComp = ({ onChildData }) => {

    const location = useLocation();

const tabClickStyle = {
    'paddingLeft': '15px',
    'color': 'crimson',
    'fontStyle': 'italic'
};

  const adminList = [
    { icon: HomeIcon, name: "Home", path: 'home' },
    { icon: GamesIcon, name: "Add Match", path: 'addMatch' },
    { icon: ContentPasteSearchIcon, name: "Add Contest", path: 'addContest' },
    { icon: GroupAddIcon, name: "Add Players", path: 'addPlayers' },
  ];

  const [open, setOpen] = React.useState(false);
  const [listClick, setListClick] = React.useState("Home");



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const tabClick = (obj) => {
    onChildData(obj.name);
    setListClick(obj.path);
    handleDrawerClose();
  };

  React.useEffect(() => {
    setListClick(location.pathname);
  }, []);

  return (
    <div>

      <div className="row adminHeadColor">
        <div className="col-2" onClick={handleDrawerOpen}>
          <ViewListIcon />
        </div>
        <div className="col-8 ">
          <b>Admin Dashboard</b>
        </div>
        <div className="col-2 text-end">
            <AccountCircleIcon />
        </div>
      </div>

      <Drawer open={open} onClose={handleDrawerClose} className="sideBar">
        <List>
          <div className="title">
            <h5>MERN11 Admin</h5>
            <CloseIcon onClick={handleDrawerClose} />
          </div>

          <ListItem style={{ display: "block" }}>
            {adminList.map((item, i) => (
              <div
                key={i}
                className="list"
                onClick={() => {
                  tabClick(item);
                }}
                style={listClick.includes(item.path) ? tabClickStyle : {}}
              >
                <item.icon /> <span>{item.name}</span>
              </div>
            ))}
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SidebarComp;
