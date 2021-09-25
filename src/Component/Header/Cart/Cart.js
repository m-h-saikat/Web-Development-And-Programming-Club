import React from 'react';

const Cart = (props) => {
    const { cart } = props;
console.log(cart);
let totalQuantity = 0;
    let total = 0;
    for (const member of cart) {
       console.log(member);
        total = total + member.Salary ;
    }

    
    return (
        <div>
         
            <h3>Total Cost :  {total.toFixed(2)}</h3>
          

        </div>
    );
};

export default Cart;