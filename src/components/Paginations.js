import React from "react";

const Paginations = ({ user }) => {
  return (
    <div className="col-md-4">
      <div className="user_card">
        <div className="img">
          <img src={user.avatar} alt="" />
        </div>
        <div className="userDetails">
          <div className="heading">
            <h5>{user.first_name} </h5>
            <h5>{user.last_name}</h5>
          </div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Paginations;
