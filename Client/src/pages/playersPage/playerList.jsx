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

    useEffect(() => {
        axiosHttpHandler.get(getPlayerByRefId + `/${params._id}`).then((res) => {
            setPlayersList(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.error('Error fetching data:', err);
        });
    }, [params])

    const [tabClick, setTabClick] = useState('WK');
    return (
        <div>
            <div className="row1">
                <div
                    onClick={() => {
                        setTabClick("WK");
                    }}
                    style={tabClick === "WK" ? active : {}}
                >
                    WK
                </div>
                <div
                    onClick={() => {
                        setTabClick("BAT");
                    }}
                    style={tabClick === "BAT" ? active : {}}
                >
                    BAT
                </div>
                <div
                    onClick={() => {
                        setTabClick("AR");
                    }}
                    style={tabClick === "AR" ? active : {}}
                >
                    AR
                </div>
                <div
                    onClick={() => {
                        setTabClick("BOWL");
                    }}
                    style={tabClick === "BOWL" ? active : {}}
                >
                    BOWL
                </div>
            </div>

            <div className="playerBox">
                {playersList.map((item, i) => (
                    <div key={i} className="row">
                        <div className="image col-2">
                            <img src={image} alt="teamIcon" className="imageIcon1" />
                            <span className="teamNameTag">{item.teamCode}</span>
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