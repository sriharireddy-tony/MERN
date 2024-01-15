import { useState, useEffect } from "react";
import image from '../../assets/Images/userPng1.jpg'
import { useParams } from "react-router-dom";
import axiosHttpHandler from "../../services/AxiosHttpHandler";
import { getPlayerByRefId } from "../../utils/apiService";


const PlayerList = () => {
    const active = {
        borderBottom: "2px solid blueviolet",
        width: "60px",
        color: "blueviolet",
    };

    const params = useParams();
    const [playersList, setPlayersList] = useState([]);
    const [playersFilterList, setplayersFilterList] = useState([]);

    useEffect(() => {
        axiosHttpHandler.get(getPlayerByRefId + `/${params._id}`).then((res) => {
          const arr =  res.data.map((data) => {
                let char = '';
                data.teamCode.split(' ').forEach((item) => {
                  let char1 = item.charAt(0)
                    char += char1;
                })
                return {
                    ...data,
                    code: char
                }
            })
            setPlayersList(arr);
            setplayersFilterList(arr);
            tabClickHandler('Wicket-Keeper');
        }).catch((err) => {
            console.error('Error fetching data:', err);
        });1
    }, [params,tabClick])

    const tabClickHandler = (role)=>{
        setTabClick(role);
        console.log(playersFilterList);
      const result = playersFilterList.filter((data)=> data.role == role );
      console.log(result);
      setPlayersList(result);
    }

    const [tabClick, setTabClick] = useState();
    return (
        <div>
            <div className="row1">
                <div
                    onClick={() => {tabClickHandler('Wicket-Keeper')}}
                    style={tabClick === "Wicket-Keeper" ? active : {}}
                >
                    WK
                </div>
                <div
                    onClick={() => {tabClickHandler('Batting')}}
                    style={tabClick === "Batting" ? active : {}}
                >
                    BAT
                </div>
                <div
                    onClick={() => {tabClickHandler('All-Rounder')}}
                    style={tabClick === "All-Rounder" ? active : {}}
                >
                    AR
                </div>
                <div
                    onClick={() => {tabClickHandler('Bowling')}}
                    style={tabClick === "Bowling" ? active : {}}
                >
                    BOWL
                </div>
            </div>

            <div className="playerBox">
                {playersList.map((item, i) => (
                    <div key={i} className="row">
                        <div className="image col-2">
                            <img src={image} alt="teamIcon" className="imageIcon1" />
                            <span className="teamNameTag">{item.code}</span>
                        </div>
                        <div className="col-5 mt-2">
                            <b className="mb-0">{item.playerName}</b>
                            <p className="mb-0">Selected By &nbsp;<b>{item.selectedPercent}%</b></p>
                        </div>
                        <div className="col-5 mt-3 flexAround">
                            <div className="creditsDiv">
                                <span>Credits</span>
                                <span>{item.credits}</span>
                            </div>

                            <div className="creditsDiv">
                                <span>Points</span>
                                <span>{item.Points}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}


export default PlayerList;