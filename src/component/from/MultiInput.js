import React, { useState } from "react";

const MultiInput = () => {
  const [userRegistration, setuserRegistration] = useState({
    Fullname: "",
    Email: "",
    Phone: "",
    Password: ""
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString()
    };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setuserRegistration({ Fullname: "", Email: "", Phone: "", Password: "" });
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Fullname</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.Fullname}
            onChange={handleInput}
            name="Fullname"
            id="Fullname"
          />
          <br />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.Email}
            onChange={handleInput}
            name="Email"
            id="Email"
          />
          <br />
          <br />
          <br />
          <label>Phone</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.Phone}
            onChange={handleInput}
            name="Phone"
            id="Phone"
          />
          <br />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={userRegistration.Password}
            onChange={handleInput}
            name="Password"
            id="Password"
          />
          <br />
          <br />
          <button type="Submit">Registration</button>
        </form>
      </div>
      <div>
        {records.map((curElem) => {
          const { id, Fullname, Email, Phone, Password } = curElem;
          return (
            <div className="showDataStyle" key={id}>
              <p>{Fullname}</p>
              <br />
              <br />
              <p>{Email}</p>
              <br />
              <br />
              <p>{Phone}</p>
              <br />
              <br />
              <p>{Password}</p>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MultiInput;
