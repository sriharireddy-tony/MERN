import React, { useEffect } from 'react'
import ContestTable from './ContestTable';

const ContestForm = () => {

    const [matchesArr, setMatchesArr] = React.useState([{ name: 'INDvsAUS' }, { name: 'ENGvsPAK' }, { name: 'BANvsNZ' }])

    const [addContest, setAddContest] = React.useState({
        teamName1: "",
        teamName2: "",
        teamCode1: "",
        teamCode2: "",
        teamImage1: "",
        teamImage2: "",
        leagueName: "",
        matchStartTime: "",
        sportName: "",
        isLineupsOut: ""
    })

    const handleOnChange = (e) => {
        setAddContest({ ...addContest, [e.target.id]: e.target.value });
    };

    const matchSelect = (e) => {
        console.log(e);
    }

    const addContestHandler = () => {

    }

    useEffect(() => {
        console.log(matchesArr);
    }, [])

    return (
        <div>
            <form className="addMatch">
                <div className="form-row row">
                    <div className="form-group col-md-3">
                        <label htmlFor="selectMatch">Select Match</label>
                        {
                            matchesArr.length != 0 && <select
                                className="form-control"
                                id="selectMatch"
                            >
                                <option value=''>--Select--</option>
                                {matchesArr.map((item,i) => {
                                   return <option key={i} value={item.name}>{item.name}</option>
                                })
                                }
                            </select>
                        }

                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamName1">Team Name1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamName1"
                            placeholder="Enter Team Name1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamName2">Team Name2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamName2"
                            placeholder="Enter Team Name2"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamCode1">Team Code1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamCode1"
                            placeholder="Enter Team Code1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamCode2">Team Code2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamCode2"
                            placeholder="Enter Team Code2"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* </div>

        <div className="form-row row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="teamImage1">Team Image1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamImage1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamImage2">Team Image2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamImage2"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZleagueNameip">League Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="leagueName"
                            placeholder="Enter League Name"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="matchStartTime">Match Start Time</label>
                        <input
                            type="text"
                            className="form-control"
                            id="matchStartTime"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* </div>
        <div className="form-group row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="sportName">Sport Name</label>
                        <select
                            className="form-control"
                            id="sportName"
                            onChange={handleOnChange}
                        >
                            <option value="">--Select--</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Kabaddi">Kabaddi</option>
                            <option value="Football">Football</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="isLineupsOut">is Lineups Out</label>
                        <select
                            className="form-control"
                            id="isLineupsOut"
                            onChange={handleOnChange}
                        >
                            <option value="">--Select--</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3 text-center">
                        <button
                            type="button"
                            className="btn btn-primary mt-4"
                            onClick={() => addContestHandler}
                        >
                            Add Match
                        </button>
                        <button type="button" className="btn btn-outline-danger mt-4 ms-3">
                            Clear
                        </button>
                    </div>
                </div>
            </form>

            <ContestTable />
        </div>
    )
}

export default ContestForm;