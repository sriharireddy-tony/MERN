/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState, memo } from "react";
import "./Match.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosHttpHandler from "../../../services/AxiosHttpHandler";
import { deleteMatch } from "../../../utils/apiService";

const Matchtable = (prop) => {
    const [matchList, setMatchList] = useState([]);

    console.log('tableTop');

    useEffect(() => {
        setMatchList(prop.matchList)
    }, [prop])

    const deleteMatchHandler = (id) => {
        axiosHttpHandler.delete(deleteMatch + `/${id}`).then((res) => {
            const copyArr = [...matchList];
            matchList.forEach((item,i)=> {
                if(item._id == res.data._id){
                    copyArr.splice(i,1);
                }
            })
            setMatchList(copyArr);
            alert("Deleted", res);
        }).catch((err) => {
            alert('Error', err)
        })
    }

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
                                <EditIcon  />
                                <DeleteIcon onClick={()=> deleteMatchHandler(item._id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default memo(Matchtable);
