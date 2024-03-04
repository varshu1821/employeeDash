import React, {useState} from "react";
import { RiLogoutBoxLine, RiHomeLine, RiUserLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


import './employee.css';
import data from "./TemplateData.json";

function Employee() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm ==""){
                  return val;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p style={{ fontWeight: "bold" }} className="employee_id">EMPLOYEE ID:{val.employee_id}</p>
                      <p style={{ fontWeight: "bold" }} classList="name">NAME: {val.name}</p>
                      <p style={{ fontWeight: "bold" }} classList="DOB:">DOB:{val.DOB}</p>
                      <p style={{ fontWeight: "bold" }} classList="ROLE:">ROLE:{val.role}</p>

                  </div> 
                )
              })
          }
        </div>
        <div className="container2">
        <Link to="/"><RiHomeLine size={42}/><h4>Home</h4></Link>
        
        <Link to="/employee"><RiUserLine size={42}/><h4>Users</h4></Link>
        
        </div>
      </div>
    </>
  )
}

export default Employee;
