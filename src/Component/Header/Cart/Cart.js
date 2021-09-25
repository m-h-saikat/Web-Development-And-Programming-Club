import React from 'react';

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
        <div className="container bg-warning me-5 mt-5 p-3 border rounded shadow p-3 mb-5  rounded">
         
            <h3>Total Cost :  {total.toFixed(2)}</h3>
            <h3>Total Programmers :  {totalQuantity}</h3>
          
           
          
          
           
           
          

        </div>
    );
};

export default Cart;