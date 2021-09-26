import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Member = (props) => {

    const {Name ,Age,Country ,Role ,Salary ,img} =props.member;
    return (
<div class="container">
  <div class="row">
    <div class="Member-info col  me-3 mt-5 p-3 ms-3 border rounded shadow p-3 mb-5 bg-white rounded">
    <div>
                <img src={img} alt="" width="100" height="100" />
            </div>
            <div >
                <h4 className="Member-name text-danger text-uppercase  "><b>{Name}</b> </h4>
                <p> <small>Role By.</small> <b>{Role}</b> </p>
                <p><b>Country:</b> {Country}</p>
                <p><b>Age:</b> {Age}</p>
                <p><b>Salary: </b>${Salary}</p>
                <button
                    onClick={() => props.handleAddToCart(props.member)}
                    className="btn btn-warning btn-outline-dark"
                >  Hire Me <FontAwesomeIcon icon={faUserPlus}/></button>
                
            </div>
    </div>
  </div>
</div>









        
    );
};

export default Member;

