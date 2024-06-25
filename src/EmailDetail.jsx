import React from "react";

const EmailDetail = ({ email, onBackClick }) => {
  return (
    <div className="email-detail">
      <button onClick={onBackClick}>Back</button>
      <h2>{email.title}</h2>
      <h3>From: {email.sender}</h3>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailDetail;
