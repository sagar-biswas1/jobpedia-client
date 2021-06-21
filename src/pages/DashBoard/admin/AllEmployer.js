import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmployerList from '../../../components/adminPanelComponents/admin/EmployerList'
import LeftSidebar from '../../../components/adminPanelComponents/LeftSideBar';

function AllEmployer() {

const [employerList,setEmployerList]= useState([])


useEffect(() => {
  axios
    .get(`https://afternoon-shelf-00792.herokuapp.com/all-employers`, {})
    .then(function (response) {
      setEmployerList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}, []);

    return (
      <div className="d-flex">
        <LeftSidebar />
        <EmployerList employerList={employerList} />
      </div>
    );
}

export default AllEmployer
