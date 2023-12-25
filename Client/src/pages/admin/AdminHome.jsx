import React from 'react'
import SidebarComp from './Sidebar'

const AdminHome = () => {

    const [tabname, setTabName] = React.useState('');

    const childTabClick = (tabName) => {
        setTabName(tabName);
    }

    return (
        <div>
            <SidebarComp onChildData={childTabClick} />
            <h5>{tabname}</h5>
        </div>
    )
}

export default AdminHome