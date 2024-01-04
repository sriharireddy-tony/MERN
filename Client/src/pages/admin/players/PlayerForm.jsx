import { useEffect, useState } from "react";
import PlayerTable from "./PlayerTable";


const PlayerForm = () => {

    const [addContest, setAddContest] = useState({
        playerName: '',

    })
    const [playersList, setPlayersList] = useState([]);

    const handleOnChange = () => {

    }

    const addPlayerHandler = () => {

    }

    return (
        <div>
            <form className="addMatch">
                <div className="form-row row">
                    <div className="form-group col-md-3">
                        <label htmlFor="matchModelId">Select Match</label>
                        {/* {
                            <select className="form-control" id="matchModelId" onChange={handleOnChange}>
                                <option value=''>--Select--</option>
                                {matchesArr.map((item, i) => {
                                    return <option key={i} value={item._id}>{item.teamName}</option>
                                })
                                }
                            </select>
                        } */}

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
                        <label htmlFor="teamCode">Team Code</label>
                        {/* {
                            <select className="form-control" id="matchModelId" onChange={handleOnChange}>
                                <option value=''>--Select--</option>
                                {matchesArr.map((item, i) => {
                                    return <option key={i} value={item._id}>{item.teamName}</option>
                                })
                                }
                            </select>
                        } */}
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="selectedPercent">Selected Percentage</label>
                        <input
                            type="text"
                            className="form-control"
                            id="selectedPercent"
                            placeholder="Enter Team Code1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="firstPrize">Is Played Last Match</label>
                        <select className="form-control" id="matchModelId" onChange={handleOnChange}>
                            <option value=''>--Select--</option>
                            <option value='true'>YES</option>
                            <option value='false'>NO</option>
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
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="credits">Credits</label>
                        <input
                            type="text"
                            className="form-control"
                            id="credits"
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
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="form-group text-end">
                        <button
                            type="button"
                            className="btn btn-primary mt-4"
                            onClick={addPlayerHandler}
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
    )

}

export default PlayerForm;