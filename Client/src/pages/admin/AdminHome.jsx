import React from 'react'
import SidebarComp from './Sidebar'
import { Outlet } from 'react-router-dom';

const AdminHome = () => {

    const [tabname, setTabName] = React.useState('');

    const childTabClick = (tabName) => {
        setTabName(tabName);
    }

    return (
        <div>
            {/* <SidebarComp onChildData={childTabClick} /> */}
            <Outlet></Outlet>
        </div>
    )
}

export default AdminHome