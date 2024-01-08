/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { Table } from 'antd';
import { Space } from "antd";

const PlayerTable = (prop) => {

    console.log('map');
    const [playersList, setPlayersList] = useState([]);
    const [sortedInfo, setSortedInfo] = useState({});

    const column = [
        {
            title: 'Player Name', dataIndex: 'playerName', 
            sorter: (a, b) => a.playerName.localeCompare(b.playerName),
        },
        {
            title: 'Team Name', dataIndex: 'teamCode', sorter: {
                compare: (a, b) => a.teamCode.localeCompare(b.teamCode)
            }
        },
        {
            title: 'selected %', dataIndex: 'selectedPercent', sorter: {
                compare: (a, b) => a.selectedPercent - b.selectedPercent,
                multiple: 1,
            }
        },
        {
            title: 'Is Played Match', dataIndex: 'isPlayedLastMatch', sorter: {
                compare: (a, b) => a.isPlayedLastMatch.localeCompare(b.isPlayedLastMatch)
            }
        },
        {
            title: 'Points', dataIndex: 'Points', sorter: {
                compare: (a, b) => a.Points - b.Points,
                multiple: 1,
            }
        },
        {
            title: 'Credits', dataIndex: 'credits', sorter: {
                compare: (a, b) => a.credits - b.credits,
                multiple: 1,
            }
        },
        {
            title: 'Role', dataIndex: 'role', sorter: {
                compare: (a, b) => a.role.localeCompare(b.role)
            }
        },
        { title: 'Created On', dataIndex: 'createdOn' },
        {
            title: "ACTION",
            dataIndex: "action",
            render: (_, record) => (
                <Space size="middle">
                <button className="btn" onClick={() => handleAction(record)} >hello</button>
                </Space>
            ),
        }
    ]

    useEffect(() => {
        const arr = prop.playersList.map((item, index) => {
            return {
                ...item,
                key: index + 1,
                isPlayedLastMatch: item.isPlayedLastMatch ? 'YES' : 'NO',
            }
        })
        setPlayersList(arr)
        console.log('useEffect');
    }, [prop.playersList])


    const deletePlayerHandler = () => {

    }

    const handleAction = ()=>{
alert("hello")
    }

    const dateFormat = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    }

    const onChange = (pagination, filters, sorter, extra) => {
        setSortedInfo(sorter);``
    };

    return (
        <div style={{ overflow: 'auto' }}>
            {/* <table className="table table-striped matchTable">
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
                            <td>{dateFormat(item.createdOn)}</td>
                            <td className="flexEvenly">
                                <EditIcon />
                                <DeleteIcon onClick={() => deletePlayerHandler(item._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}


            <Table id="adminPlayer" columns={column} dataSource={playersList} onChange={onChange} />
        </div>
    )
}

export default PlayerTable;