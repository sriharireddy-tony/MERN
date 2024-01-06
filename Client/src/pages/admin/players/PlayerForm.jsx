/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PlayerTable from "./PlayerTable";
import { useDispatch, useSelector } from "react-redux";
import { getMatchListData } from "../../../redux/createSlice/matchListApiSlice";
import axiosHttpHandler from "../../../services/AxiosHttpHandler";
import { createPlayer, getPlayers, getPlayerByRefId } from "../../../utils/apiService";

const PlayerForm = () => {
    let teamCode = [];
    const roles = ['Batting', 'Bowling', 'All-Rounder', 'Umpire']

    const dispatch = useDispatch();

    const [addPlayer, setAddPlayer] = useState({
        playerName: "",
        teamCode: "",
        selectedPercent: "",
        isPlayedLastMatch: "",
        Points: "",
        credits: "",
        role: "",
        matchModelId: "",
    });
    const [playersList, setPlayersList] = useState([]);
    const [teamName, setTeamName] = useState([]);


    const tempMatchList = useSelector((state) => state.matchList.matchList);
    const selectorMatchList = tempMatchList.map((item) => { return { _id: item._id, name: `${item.teamCode1} vs ${item.teamCode2}` } });

    useEffect(() => {
        dispatch(getMatchListData());
        getPlayerByRefIdFunc();
    }, [dispatch])


    console.log(selectorMatchList);

    const handleOnChange = async (e) => {
        if (e.target.id == 'matchModelId') {

            if (e.target.value) {
                try {
                    const res = await axiosHttpHandler.get(getPlayerByRefId + `/${e.target.value}`);
                    setPlayersList(res.data);
                } catch (err) {
                    console.log('Players getting failed', err);
                }
                const filterMatch = tempMatchList.filter((item) => item._id == e.target.value);
                teamCode[0] = filterMatch[0].teamName1;
                teamCode[1] = filterMatch[0].teamName2;
                setTeamName(teamCode);
            } else {
                getPlayerByRefIdFunc();
            }
        }
        setAddPlayer({ ...addPlayer, [e.target.id]: e.target.value });
    };

    const addPlayerHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosHttpHandler.post(createPlayer, addPlayer);
            getPlayerByRefIdFunc();
            alert("Player Saved", res);
        } catch (err) {
            console.log('Player Saving Failed!', err);
        }
    };

    const getPlayerByRefIdFunc = async () => {
        try {
            const res = await axiosHttpHandler.get(getPlayers);
            setPlayersList(res.data);
        } catch (err) {
            console.log('Players getting failed', err);
        }
    }

    return (
        <div>
            <form className="addMatch" onSubmit={addPlayerHandler}>
                <div className="form-row row">
                    <div className="form-group col-md-3">
                        <label htmlFor="matchModelId">Select Match</label>
                        {
                            <select className="form-control" id="matchModelId" onChange={handleOnChange}>
                                <option value=''>--Select--</option>
                                {selectorMatchList.map((item, i) => {
                                    return <option key={i} value={item._id}>{item.name}</option>
                                })
                                }
                            </select>
                        }
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="playerName">Player Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="playerName"
                            placeholder="Enter Player Name"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamCode">Team Name</label>
                        {
                            <select className="form-control" id="teamCode" onChange={handleOnChange}>
                                <option value=''>--Select--</option>
                                {teamName.map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                })
                                }
                            </select>
                        }
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="selectedPercent">Selected Percentage</label>
                        <input
                            type="text"
                            className="form-control"
                            id="selectedPercent"
                            placeholder="Enter Selected %"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="isPlayedLastMatch">Is Played Last Match</label>
                        <select
                            className="form-control"
                            id="isPlayedLastMatch"
                            onChange={handleOnChange}
                        >
                            <option value="">--Select--</option>
                            <option value="true">YES</option>
                            <option value="false">NO</option>
                        </select>
                    </div>
                    {/* </div>

        <div className="form-row row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="Points">Points</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Points"
                            placeholder="Enter Points"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="credits">Credits</label>
                        <input
                            type="text"
                            className="form-control"
                            id="credits"
                            placeholder="Enter Credits"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* </div>
        <div className="form-group row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="role">Role</label>
                        <select
                            className="form-control"
                            id="role"
                            onChange={handleOnChange}
                        >
                            <option value="">--Select--</option>
                            {
                                roles.map((data, i) => {
                                    return <option key={i} value={data}>{data}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group text-end">
                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                        >
                            Add Player
                        </button>
                        <button type="button" className="btn btn-outline-danger mt-4 ms-3">
                            Clear
                        </button>
                    </div>
                </div>
            </form>
            <div className="mx-3 mt-4">
                <PlayerTable playersList={playersList} />
            </div>
        </div>
    );
};

export default PlayerForm;
