import React, { useEffect, useState,memo } from "react";
import "./Match.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Matchtable = () => {
  const [matchList, setMatchList] = useState([]);

console.log('tableTop');

//   useEffect(()=> {
//     setMatchList(prop.matchList)
//     // console.log('tableuseEffect');
//   },[prop])

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
            <th scope="col"></th>
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
              <td className="flexEvenly">
                <EditIcon onClick={()=>console.log('clicked')} />
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Matchtable);
