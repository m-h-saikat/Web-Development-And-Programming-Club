import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

let totalQuantity = 0;
    let total = 0;
    for (const member of cart) {
     
        if (!member.quantity) {
            member.quantity = 1;
        }
        total = total + member.Salary * member.quantity;
        totalQuantity = totalQuantity + member.quantity;
  
       
      
    }

   
    return (
        <div className="container cart  me-5 mt-5 p-3 border rounded shadow p-3 mb-5  rounded">
           <h4><b> <FontAwesomeIcon icon={faUsers}/> Total Programmers :</b>{totalQuantity}</h4>
            <h4><b>Total Cost :</b> ${total.toFixed(2)}</h4>
          
            <div className="HiredProgrammerList">
                    <h4>Hired Programmer List</h4>
                    <hr/>
                    <ol>
                        {
                            cart.map(programmer => <li key={programmer.Name}>{programmer.Name}
                            </li>)
                        }
                    </ol>
                    <button
                    className="btn btn-danger"
                ><FontAwesomeIcon icon={faEnvelope}/> Send Appoinment Letter</button>
                </div>
          
           
          
          
           
           
          

        </div>
    );
};

export default Cart;