import React from 'react';

const Member = (props) => {
    console.log(props);
    const {Name ,Age,Country ,Role ,Salary ,img} =props.member;
    return (
        <div className="Member">
            <div>
                <img src={img} alt="" width="100" height="100" />
            </div>
            <div>
                <h4 className="Member-name">{Name}</h4>
                <p>Role By. {Role}</p>
                <p>Country: {Country}</p>
                <p>Age: {Age}</p>
                <p>Hired Amount : $ {Salary}</p>
                <button
                    onClick={() => props.handleAddToCart(props)}
                    className="btn-regular"
                > Hire Me</button>
            </div>

        </div>
    );
};

export default Member;