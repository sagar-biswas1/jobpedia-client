import React from 'react'
import EmployerList from '../../../components/adminPanelComponents/admin/EmployerList'
import LeftSidebar from '../../../components/adminPanelComponents/LeftSideBar';

function AllEmployer() {
    return (
      <div className="d-flex">
        <LeftSidebar />
        <EmployerList />
      </div>
    );
}

export default AllEmployer
