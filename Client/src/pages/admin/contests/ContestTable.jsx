/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, memo } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContestTable = (prop) => {

    const [contestList, setContestList] = useState([]);

    useEffect(()=> {
        setContestList(prop.contestList);
        console.log(prop.contestList);
    },[prop])

    const deleteMatchHandler = (_id)=>{
_id
    }

  return (
    <div>
    <table className="table table-striped matchTable">
        <thead className="thead-dark">
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Contest Entry</th>
                <th scope="col">Contest Size</th>
                <th scope="col">Contest Filled Size</th>
                <th scope="col">First Prize</th>
                <th scope="col">Win %</th>
                <th scope="col">Teams UpTo</th>
                <th scope="col">Is Discount</th>
                <th scope="col">Discount Entry</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {contestList.map((item, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.contestEntry}</td>
                    <td>{item.contestSize}</td>
                    <td>{item.contestFilledsize}</td>
                    <td>{item.firstPrize}</td>
                    <td>{item.contestWinPercentage}</td>
                    <td>{item.teamsUpto}</td>
                    <td>{item.isDiscount}</td>
                    <td>{item.discountEntry}</td>
                    <td className="flexEvenly">
                        <EditIcon  />
                        <DeleteIcon onClick={()=> deleteMatchHandler(item._id)}/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default memo(ContestTable);