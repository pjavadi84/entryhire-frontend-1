import React, { useState } from "react";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <h1>You are {props.loggedInStatus} </h1>
      </div>
    </div>
  );
};

export default Dashboard;
