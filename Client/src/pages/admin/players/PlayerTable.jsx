import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const PlayerTable = (prop) => {

    const [playersList, setPlayersList] = useState([]);

useEffect(()=>{
    setPlayersList(prop.playersList)
},[prop.playersList])

const deletePlayerHandler = ()=> {

}

  return (
    <div style={{overflow: 'auto'}}>
    <table className="table table-striped matchTable">
        <thead className="thead-dark">
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Player Name</th>
                <th scope="col">Team Name</th>
                <th scope="col">selected %</th>
                <th scope="col">Is Played Match</th>
                <th scope="col">Points</th>
                <th scope="col">Credits</th>
                <th scope="col">Role</th>
                <th scope="col">Created On</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {playersList.length != 0 && playersList.map((item, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.playerName}</td>
                    <td>{item.teamCode}</td>
                    <td>{item.selectedPercent}</td>
                    <td>{item.isPlayedLastMatch ? 'YES' : 'NO'}</td>
                    <td>{item.Points}</td>
                    <td>{item.credits}</td>
                    <td>{item.role}</td>
                    <td>{item.createdOn}</td>
                    <td className="flexEvenly">
                        <EditIcon  />
                        <DeleteIcon onClick={()=> deletePlayerHandler(item._id)}/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default PlayerTable;