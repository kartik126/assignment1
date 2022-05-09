import React, { useState } from "react";
import "./style.css";

function Form() {
  const [userData, setuserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    single: "Single",
    married: "Married",
    qualification: "",
    gender: "",
    marital: "",
  });

  const [onsubmit, setonsubmit] = useState(false);
  const initialCheckboxes = [
    { name: "10th", checked: false },
    { name: "12th", checked: false },
    { name: "btech", checked: false },
  ];
  const [checkboxItems, setCheckboxItems] = useState(initialCheckboxes);
  const [selected, setselected] = useState([]);
  const handleData = (e) => {
    setonsubmit(false);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserData({ ...userData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setuserData({ ...userData });
    console.log(userData);
    setonsubmit(true);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left_div">
            <form className="row g-3" action="" onSubmit={submit}>
              <div className="col-md-6 m-">
                <label className="form-label">First Name :</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.firstname}
                  onChange={handleData}
                  name="firstname"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name :</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.lastname}
                  onChange={handleData}
                  name="lastname"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div className="col-md-12">
                <label className="form-label">Email ID :</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.email}
                  onChange={handleData}
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Enter Emai ID"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  Select Gender :
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  value={userData.gender}
                  onChange={handleData}
                  name="gender"
                  autoComplete="off"
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Enter Age :
                </label>
                <input
                  type="text"
                  placeholder="Age"
                  className="form-control input-md"
                  maxLength={2}
                  value={userData.age}
                  onChange={handleData}
                  name="age"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-md-7">
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-5 pt-0" style={{textAlign:"left"}}>
                    Marital Status :
                  </legend>
                  <div className="col-sm-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="marital"
                        id="flexRadioDefault1"
                        value={userData.single}
                        checked={userData.marital == "Single"}
                        onChange={handleData}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Single
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="marital"
                        id="flexRadioDefault2"
                        value={userData.married}
                        checked={userData.marital == "Married"}
                        onChange={handleData}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Married
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-md-12">
                <label className="form-label">Qualification :</label>
                <div className="col-md-4">
                  {checkboxItems.map((checkbox, index) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck0"
                          value={checkbox.name}
                          onChange={(e) => {
                            const newCheckboxes = [...checkboxItems];
                            newCheckboxes[index].checked = e.target.checked;
                            setCheckboxItems(newCheckboxes);
                            console.log(checkboxItems);
                            const checkedItems = checkboxItems.filter(
                              ({ checked }) => checked
                            );
                         
                            setselected(checkedItems);
        
                            console.log(selected);
                          }}
                          checked={checkbox.checked}
                          name="qualification"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck0"
                        >
                          {checkbox.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-10 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 right-div">
            {onsubmit ? (
              <>
                <p>
                  Name : {userData.firstname} {userData.lastname}
                </p>
                <p>Email Id : {userData.email}</p> Age : <p>{userData.age}</p>
                <p>Gender : {userData.gender}</p> <p>{userData.marital}</p>
                <p>Qualification :</p>
                {selected.map((val) => {
                  return <p> {val.name}</p>;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
