import React, { useEffect, useState } from 'react';
import "./Members.css"
// import Member from '../Member/Member';
import Cart from '../Cart/Cart';
import Member from '../Member/Member'

const Members = () => {
    const [members ,setMembers]=useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./members.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="Members-container">
           
            <div className="Member-container">
                {
                    members.map(member => <Member
                        key={member.key}
                        member={member}
                        handleAddToCart={handleAddToCart}
                    >
                    </Member> )
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
          
          
            </div>
        </div>
    );
};

export default Members;