import { Contacts, Delete } from "@material-ui/icons";
import React, { useState } from "react";
import "./App.css";

const TableData = (props) => {
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({
    id: "",
    username: "",
    email: "",
    city: "",
  });
  const [update, setUpdate] = useState(false)

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const addRows = () => {
    if (
      data.id != "" &&
      data.username != "" &&
      data.email != "" &&
      data.city != ""
    ) {
      setUserData([...userData, data]);
      setData({
        id: "",
        username: "",
        email: "",
        city: "",
      });
    } else {
      alert("Enter the required fields");
    }
  };

  const deleteUser = (id) => {

    if(userData.length){
      setUpdate(false)

    }
    setData({
      id: "",
      username: "",
      email: "",
      city: "",
    });
    const filteredData = userData.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setUserData(filteredData);
  };

  const userDataToUpdate = (info) => {
    setData(info)
    setUpdate(true)
  };

  const updateUser = () => {

    const filteredData = userData.filter((item) => {
      if (item.id !== data.id) {
        return item;
      }
    });
    setUserData(...filteredData,user);
    // var demo = userData
    // console.log("beforeUpdate-----",demo)
    // demo.map((item) => {
    //   if(item.id === data.id){
    //     item.username = data.username;
    //     item.email = data.email;
    //     item.city = data.city
    //   }
    // })
    // console.log("AfterUpdate------",demo);
  }

  const ResetForm = () =>{
    setUpdate(false);
    setData({
      id: "",
      username: "",
      email: "",
      city: "",
    });
  }
  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Operation</th>
        </tr>
        {userData?.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={()=> userDataToUpdate (user)}>Update</button>
            </td>
          </tr>
        ))}
      </table>

      <div className="box">
        <form>
          <input
            type="text"
            value={data.id}
            name="id"
            placeholder="Enter id"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.username}
            name="username"
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.city}
            name="city"
            placeholder="Enter city"
            onChange={handleChange}
            required
          />
          {update ?  <div><button  onClick={updateUser}>
            update
          </button><button type="submit" onClick={ResetForm}>
            Cancel
          </button></div>:
         <div> <button type="submit" onClick={addRows}>
            Add
          </button>
          <button type="submit" onClick={ResetForm}>
            Cancel
          </button></div>}
        </form>
      </div>
    </>
  );
};

export default TableData;
