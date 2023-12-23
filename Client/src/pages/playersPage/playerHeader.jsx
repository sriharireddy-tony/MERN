import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './player.css'
import NotificationsIcon from "@mui/icons-material/Notifications";
import PlayerList from './playerList';
import { useNavigate } from 'react-router-dom';


const PlayerHeader = () =>{
    const navigate = useNavigate();

    return(
        <div>
       <div className='flexBetween contestHeaderColor'>
                <div className='cursor' style={{marginLeft:'1vw'}} onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <div>
                    <b>IND</b>&nbsp;vs&nbsp;<b>AUS</b>&nbsp; (<b>30m 36s Left</b>)
                </div>
                <div className='cursor' style={{marginRight:'1vw'}}>
                    <NotificationsIcon />
                </div>
            </div>

            <div className="responsive">
                <PlayerList />
            </div>
        </div>
    )
}

export default PlayerHeader;