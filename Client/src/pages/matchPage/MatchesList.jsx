import { useEffect } from 'react'
import image from '../../assets/Images/userPng1.jpg'
import './matchPage.css'
import axiosHttpHandler from '../../services/AxiosHttpHandler'
import { getMatchList } from '../../utils/apiService'

const MatchesList = () => {

  useEffect(()=>{
    axiosHttpHandler.get(getMatchList)
    .then((res) => {
      console.log('Response data:', res);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });

  },[])


  return (
    <div className='matchBody'>
            <div className="matchCard">
                <div className="matchCardRow">
                    <div className="col-12">
                        ICC World Cup 2023
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                <div className="matchCardRow1">
                    <div className="col-4">
                        <div className="image">
                            <img src={image} alt="teamIcon" className="imageIcon" />&nbsp; IND
                        </div>
                        <div className='teamName1'>
                            India
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        01:30 PM
                    </div>
                    <div className="col-4">
                        <div className="teamImage2 image">
                            AUS &nbsp;<img src={image} alt="teamIcon" className="imageIcon" />
                        </div>
                        <div className='teamName2'>
                            Australia
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="matchCardRow2">
                    <div className="col-12">
                        Mega Size
                    </div>
                </div>
            </div>
            <div className="matchCard">
                <div className="matchCardRow">
                    <div className="col-12">
                        ICC World Cup 2023
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                <div className="matchCardRow1">
                    <div className="col-4">
                        <div className="image">
                            <img src={image} alt="teamIcon" className="imageIcon" />&nbsp; IND
                        </div>
                        <div className='teamName1'>
                            India
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        01:30 PM
                    </div>
                    <div className="col-4">
                        <div className="teamImage2 image">
                            AUS &nbsp;<img src={image} alt="teamIcon" className="imageIcon" />
                        </div>
                        <div className='teamName2'>
                            Australia
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="matchCardRow2">
                    <div className="col-12">
                        Mega Size
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MatchesList;