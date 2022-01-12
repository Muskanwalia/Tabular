import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TableData from "./form.jsx";
// import Table from "./Table.js";
// import Signup from "./Signup.js";
import "./App.css";

const App = () => {

 return(
   <>
    <TableData/>
   </>
 );

  // const [showTable, setShowTable] = useState(false);
  // const [token,setToken] = useState();

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // });
 
  // return (
  //   <>
  //     {token ? (
  //       <Table setShowTable={setShowTable} setToken={setToken} />
  //     ) : (
  //       <Signup setShowTable={setShowTable} setToken={setToken} />
  //     )}
  //   </>
  // );
};

export default App;
