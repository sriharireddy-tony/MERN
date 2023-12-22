import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Contest.css'
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContestList from './contestList';

const ContestHeader = () => {
    return (
        <div className="responsive">
            <div className='flexBetween contestHeaderColor'>
                <div className='cursor'>
                    <ArrowBackIcon />
                </div>
                <div>
                    <b>IND</b>&nbsp;vs&nbsp;<b>AUS</b>&nbsp; (<b>30m 36s Left</b>)
                </div>
                <div className='cursor'>
                    <NotificationsIcon />
                </div>
            </div>

            <ContestList />
        </div>
    )
}

export default ContestHeader;