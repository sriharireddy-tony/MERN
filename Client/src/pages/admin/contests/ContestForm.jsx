/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ContestTable from './ContestTable';
import axiosHttpHandler from '../../../services/AxiosHttpHandler';
import { getMatchList, createContest, getContestByRefId } from '../../../utils/apiService';

const ContestForm = () => {

    const [matchesArr, setMatchesArr] = React.useState([])
    const [contestList, setContestList] = useState([]);

    const [addContest, setAddContest] = React.useState({
        contestEntry: "",
        contestSize: "",
        contestFilledsize: "",
        firstPrize: "",
        contestWinPercentage: "",
        teamsUpto: "",
        isDiscount: "",
        discountEntry: ""
    })

    useEffect(() => {
        getMatchListHandler();
        getContestList();
    }, [])

    const handleOnChange = (e) => {
        setAddContest({ ...addContest, [e.target.id]: e.target.value });
    };

    const addContestHandler = () => {
        axiosHttpHandler.post(createContest, addContest).then(res => {
            alert("Contest Saved", res);
            getContestList();
        }).catch((err) => {
            console.log('Contest Saving Failed', err);
        })
    }


    const getMatchListHandler = () => {
        axiosHttpHandler
            .get(getMatchList)
            .then((res) => {
                const matchList = res.data.map((data) => {
                    return {
                        teamName: `${data.teamCode1} vs ${data.teamCode2}`,
                        _id: `${data._id}`
                    }
                })
                setMatchesArr(matchList);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    };

    const getContestList = () => {
        axiosHttpHandler.get(getContestByRefId+`/6565e1a6f155a31b05793cd4`).then(res => {
            setContestList(res.data);
        }).catch((err) => {
            console.log('Getting Contests Failed', err);
        })
    }

    return (
        <div>
            <form className="addMatch">
                <div className="form-row row">
                    <div className="form-group col-md-3">
                        <label htmlFor="matchModelId">Select Match</label>
                        {
                            <select className="form-control" id="matchModelId" onChange={handleOnChange}>
                                <option value=''>--Select--</option>
                                {matchesArr.map((item, i) => {
                                    return <option key={i} value={item._id}>{item.teamName}</option>
                                })
                                }
                            </select>
                        }

                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="contestEntry">Contest Entry</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contestEntry"
                            placeholder="Enter Team Name1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="contestSize">Contest Size</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contestSize"
                            placeholder="Enter Team Name2"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="contestFilledsize">Contest Filled Size</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contestFilledsize"
                            placeholder="Enter Team Code1"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="firstPrize">First Prize</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstPrize"
                            placeholder="Enter Team Code2"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* </div>

        <div className="form-row row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="contestWinPercentage">Win %</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contestWinPercentage"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="teamsUpto">Teams UpTo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teamsUpto"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* </div>
        <div className="form-group row"> */}
                    <div className="form-group col-md-3">
                        <label htmlFor="isDiscount">Is Discount</label>
                        <select
                            className="form-control"
                            id="isDiscount"
                            onChange={handleOnChange}
                        >
                            <option value="">--Select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="discountEntry">Discount Entry</label>
                        <input
                            type="text"
                            className="form-control"
                            id="discountEntry"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group col-md-3 text-center">
                        <button
                            type="button"
                            className="btn btn-primary mt-4"
                            onClick={addContestHandler}
                        >
                            Add Contest
                        </button>
                        <button type="button" className="btn btn-outline-danger mt-4 ms-3">
                            Clear
                        </button>
                    </div>
                </div>
            </form>
            <div className="mx-3 mt-4">
            <ContestTable contestList ={contestList}/>
            </div>
        </div>
    )
}

export default ContestForm;