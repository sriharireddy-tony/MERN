import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContestHeader = () => {
    return (
        <div>
            <div>
                <ArrowBackIcon />
            </div>
            <div>
                <span>IND</span>vs<span>AUS</span>
                <div>30m 36s Left</div>
            </div>
        </div>
    )
}

export default ContestHeader;