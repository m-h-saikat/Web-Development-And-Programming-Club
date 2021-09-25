import React from 'react';

const Member = (props) => {

    const {Name ,Age,Country ,Role ,Salary ,img} =props.member;
    return (
<div class="container">
  <div class="row">
    <div class="col  me-5 mt-5 p-3 border rounded shadow p-3 mb-5 bg-white rounded">
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
                    onClick={() => props.handleAddToCart(props.member)}
                    className="btn btn-warning"
                > Hire Me</button>
            </div>
    </div>
  </div>
</div>









        
    );
};

export default Member;

