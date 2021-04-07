import React, { useState } from "react";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h1>Welcome {props.partner.contact_name} </h1>
        <h1>You are {props.loggedInStatus} </h1>
      </div>
    </div>
  );
};

export default Dashboard;
