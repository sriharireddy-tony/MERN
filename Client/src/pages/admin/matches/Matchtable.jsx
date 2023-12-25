import React, { useEffect, useState } from "react";
import "./Match.css";
import axiosHttpHandler from "../../../services/AxiosHttpHandler";
import { getMatchList } from "../../../utils/apiService";

const Matchtable = () => {
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    axiosHttpHandler
      .get(getMatchList)
      .then((res) => {
        setMatchList(res.data);
        //   dispatch(getReduxMatchList(res.data))
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <table className="table table-striped matchTable">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Team1</th>
            <th scope="col">Team2</th>
            <th scope="col">T Code1</th>
            <th scope="col">T Code2</th>
            <th scope="col">League Name</th>
            <th scope="col">Sport Name</th>
            <th scope="col">Start Time</th>
            <th scope="col">LineUps</th>
          </tr>
        </thead>
        <tbody>
          {matchList.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.teamName1}</td>
              <td>{item.teamName2}</td>
              <td>{item.teamCode1}</td>
              <td>{item.teamCode2}</td>
              <td>{item.leagueName}</td>
              <td>{item.sportName}</td>
              <td>{item.matchStartTime}</td>
              <td>{item.isLineupsOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matchtable;
