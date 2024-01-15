/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import image from '../../assets/Images/userPng1.jpg'
import './matchPage.css'
import axiosHttpHandler from '../../services/AxiosHttpHandler'
import { getMatchList } from '../../utils/apiService'
import { getReduxMatchList } from '../../redux/createSlice/matchList'
import { useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContest'

const MatchesList = () => {

    const data = useAuth();

    console.log(data);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    var [matchListArr, setMatchListArr] = useState([]);



  useEffect(()=>{
   axiosHttpHandler.get(getMatchList)
    .then((res) => {
        setMatchListArr(res.data);
    //   dispatch(getReduxMatchList(res.data))
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });

  },[])


  return (
    <div className='matchBody'>
        {matchListArr.length !=0 && matchListArr.map((match, index) => (
            <div key={index} className="matchCard" onClick={()=> navigate(`/contestList/${match._id}`)}>
                <div className="matchCardRow">
                    <div className="col-12">
                        {match.leagueName}
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                <div className="matchCardRow1">
                    <div className="col-4">
                        <div className="image">
                            <img src={image} alt="teamIcon" className="imageIcon" />&nbsp; {match.teamCode1}
                        </div>
                        <div className='teamName1'>
                        {match.teamName1}
                        </div>
                    </div>
                    <div className="col-4 text-center">
                    {match.matchStartTime}
                    </div>
                    <div className="col-4">
                        <div className="teamImage2 image">
                        {match.teamCode2} &nbsp;<img src={image} alt="teamIcon" className="imageIcon" />
                        </div>
                        <div className='teamName2'>
                        {match.teamName2}
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="matchCardRow2">
                    <div className="col-12">
                        Mega Size :
                    </div>
                </div>
            </div>
        ))}
           
    </div>
  )
}

export default MatchesList;