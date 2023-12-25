import React from 'react'
import './admin.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import GamesIcon from '@mui/icons-material/Games';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const SidebarComp = ({onChildData}) => {

    const adminList = [{ 'icon': HomeIcon, 'name': 'Home' }, { 'icon': GamesIcon, 'name': 'Add Match' },
    { 'icon': ContentPasteSearchIcon, 'name': 'Add Contest' }, { 'icon': GroupAddIcon, 'name': 'Add Players' }]

    const [open, setOpen] = React.useState(false);
    const [listClick, setListClick] = React.useState('Home');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const tabClick = (name)=> {
        onChildData(name)
        setListClick(name)
        handleDrawerClose();
    }

    React.useEffect(() => {
        
    },[])

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Application Title
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={handleDrawerClose} className='sideBar'>
                <List>
                    <div className="title">
                        <h5>MERN11 Admin</h5><CloseIcon onClick={handleDrawerClose} />
                    </div>

                    <ListItem style={{ display: 'block' }}>
                        {
                            adminList.map((item, i) => (
                                <div key={i} className='list' onClick={()=>{tabClick(item.name)}}>
                                    <item.icon /> <span>{item.name}</span>
                                </div>
                            ))
                        }

                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default SidebarComp;