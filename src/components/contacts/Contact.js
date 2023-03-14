import React from "react";

import "./ContactsList.css";

export const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
    <div className='contact'>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{phone}</div>
      <div>{gender}</div>
    </div>
  );
};
