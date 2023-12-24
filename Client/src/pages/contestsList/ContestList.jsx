import React, { useState } from 'react'
import { useEffect } from 'react';
import axiosHttpHandler from '../../services/AxiosHttpHandler';
import { getContestByRefId } from '../../utils/apiService';
import './Contest.css'
import { useParams,useNavigate } from 'react-router-dom';


const ContestList = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [contestList, setContestList] = useState([]);

    useEffect(()=>{
        axiosHttpHandler.get(getContestByRefId+`/${params._id}`)
         .then((res) => {
            setContestList(res.data);
            console.log(res.data)
         //   dispatch(getReduxMatchList(res.data))
         })
         .catch((err) => {
           console.error('Error fetching data:', err);
         });
     
       },[params])
    

    return (
        <div className='matchBody'>
        {contestList.length !=0 && contestList.map((contest, index) => (

            <div key={index} className="contestCard" onClick={()=>navigate(`/playersList/${contest._id}`)}>
                <div className="matchCardRow">
                    <div className="col-12">
                        Max Prize Pool
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                <div className="matchCardRow1">
                    <div className="col-4">
                        <h5>100000</h5>
                    </div>
                    <div className="col-4 text-center">
                  
                    </div>
                    <div className="col-4 text-end">
                        <button type='button' className='btn btn-success'>{contest.contestEntry}</button>
                    </div>
                </div>
                <hr className="hr" />
                <div className="matchCardRow2">
                    <div className="col-12">
                        <span className='text1'>First :</span>&nbsp;<span className='text'>{contest.firstPrize}</span>&nbsp; |
                        &nbsp;<span className='text1'>Win% :</span>&nbsp;<span className='text'>{contest.contestWinPercentage}%</span>&nbsp; |
                        &nbsp;<span className='text1'>Teams UpTo :</span>&nbsp;<span className='text'>{contest.teamsUpto}</span>&nbsp;
                    </div>
                </div>
            </div>
         ))}
           
    </div>
    )
}

export default ContestList;