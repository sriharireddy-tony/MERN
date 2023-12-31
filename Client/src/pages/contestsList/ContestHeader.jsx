import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Contest.css'
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContestList from './contestList';
import { useNavigate } from 'react-router-dom';

const ContestHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="">
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
                <ContestList />
            </div>
        </div>
    )
}

export default ContestHeader;