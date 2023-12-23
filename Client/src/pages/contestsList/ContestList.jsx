import React, { useState } from 'react'
import { useEffect } from 'react';
import axiosHttpHandler from '../../services/AxiosHttpHandler';
import { getContestByRefId } from '../../utils/apiService';
import './Contest.css'
import { useParams } from 'react-router-dom';


const ContestList = () => {

    const params = useParams();
    const [contestList, setContestList] = useState([]);

    useEffect(()=>{
        axiosHttpHandler.get(getContestByRefId+`/${params._id}`)
         .then((res) => {
            setContestList(res.data);
             console.log(contestList);
         //   dispatch(getReduxMatchList(res.data))
         })
         .catch((err) => {
           console.error('Error fetching data:', err);
         });
     
       },[])
    

    return (
        <div className='matchBody'>
        {contestList.length !=0 && contestList.map((contest, index) => (

            <div key={index} className="contestCard">
                <div className="matchCardRow">
                    <div className="col-12">
                        Max Prize Pool
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                <div className="matchCardRow1">
                    <div className="col-4">
                        <h6>66</h6>
                    </div>
                    <div className="col-4 text-center">
                  
                    </div>
                    <div className="col-4 text-end">
                        <button type='button' className='btn btn-success'>17</button>
                    </div>
                </div>
                <hr className="hr" />
                <div className="matchCardRow2">
                    <div className="col-12">
                        <span>First :</span>
                        <span>Win :</span>
                    </div>
                </div>
            </div>
         ))}
           
    </div>
    )
}

export default ContestList;