import { useEffect, useState } from "react";
import "./Match.css";
import Matchtable from "./Matchtable";
import axiosHttpHandler from "../../../services/AxiosHttpHandler";
import { createMatch,getMatchList } from "../../../utils/apiService";
import { useMemo } from "react";

const MatchForm = () => {
//   const [addMatch, setAddMatch] = useState({
//     teamName1: "",
//     teamName2: "",
//     teamCode1: "",
//     teamCode2: "",
//     teamImage1: "",
//     teamImage2: "",
//     leagueName: "",
//     matchStartTime: "",
//     sportName: "",
//     isLineupsOut: "",
//   });

const [addMatch, setAddMatch] = useState(useMemo(()=>( {
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
}),[]))

  const [matchList, setMatchList] = useState([]);

  const handleOnChange = (e) => {
    setAddMatch({ ...addMatch, [e.target.id]: e.target.value });
  };

  console.log('formTop');
  const addMatchHandler = () => {
    if (
      !addMatch.teamName1 ||
      !addMatch.teamName2 ||
      !addMatch.teamCode1 ||
      !addMatch.teamCode2 ||
      !addMatch.leagueName ||
      !addMatch.matchStartTime ||
      !addMatch.sportName ||
      !addMatch.isLineupsOut
    ) {
     alert('Enter all mandatory fields')
      return;
    }
    axiosHttpHandler.post(createMatch,addMatch)
      .then((res) => {
        alert("Saved", res);
        getList();
      })
      .catch((err) => {
        alert("Error", err);
      });
  };

  useEffect(()=>{
    getList();
  },[])

  const getList = () => {
    axiosHttpHandler
      .get(getMatchList)
      .then((res) => {
        setMatchList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };


  return (
    <div>
      <form className="addMatch">
        <div className="form-row row">
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
        </div>

        <div className="form-row row">
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
        </div>
        <div className="form-group row">
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
          <div className="form-group col-md-6 text-center">
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={addMatchHandler}
            >
              Add Match
            </button>
            <button type="button" className="btn btn-outline-danger mt-4 ms-3">
              Clear
            </button>
          </div>
        </div>
      </form>

      <div className="mx-3 mt-4">
        <Matchtable matchList={matchList}/>
      </div>
    </div>
  );
};

export default MatchForm;
