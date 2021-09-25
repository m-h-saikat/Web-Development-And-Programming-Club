import React from 'react';

const Cart = (props) => {
    const { cart } = props;
console.log(cart);
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
        <div>
         
            <h3>Total Cost :  {total.toFixed(2)}</h3>
            <h3>Total Programmers :  {totalQuantity}</h3>
           
          

        </div>
    );
};

export default Cart;