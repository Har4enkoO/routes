import React, { useState } from "react";

import { Contact } from "./Contact";

import "./ContactsList.css";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "ufo",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export const ContactsList = () => {
  const [list, setList] = useState(contacts);
  const [filteredGenders, setFilteredGenders] = useState([
    "male",
    "female",
    "ufo",
  ]);

  const filterContact = (e) => {
    const search = e.target.value;
    setList(
      contacts.filter(
        (el) =>
          el.firstName.toLocaleLowerCase().includes(search) ||
          el.lastName.toLocaleLowerCase().includes(search) ||
          el.phone.toLocaleLowerCase().includes(search)
      )
    );
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFilteredGenders((prew) => {
        return [...prew, value];
      });
    } else {
      setFilteredGenders((prew) => {
        return prew.filter((el) => el !== value);
      });
    }
  };

  return (
    <div className="main">
      <h1>Contacts List</h1>
      <input className="input" type="text" onChange={filterContact}></input>
      <div>
        <input
          type="checkbox"
          value="male"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="male">male</label>
        <input
          type="checkbox"
          value="female"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="female">female</label>
        <input
          type="checkbox"
          value="ufo"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="ufo">ufo</label>
      </div>
      <div className="contacts">
        {list
          .filter((el) => filteredGenders.includes(el.gender))
          .map((el) => (
            <Contact
              key={Math.random() + Date.now()}
              firstName={el.firstName}
              lastName={el.lastName}
              phone={el.phone}
              gender={el.gender}
            />
          ))}
      </div>
    </div>
  );
};
