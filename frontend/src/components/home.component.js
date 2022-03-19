import React, { useState,useEffect } from "react";
import dataService from "../services/data-service";
import DataChart from "./data-chart.componet";
import "./style.css";

const Home = (props) => {
  const [ip, setIP] = useState("");
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if(ip){
      const res = await dataService.getGeoInfo(ip)
      setInfo([res])
      console.log(res)
    }

  }
  fetchData()

  }, [ip]);
 
    return (
      <div className="container">
        <header>
          <h3>Welcome To My App!!</h3>
          <strong>Enter any IP Address to get GEO Info</strong> <br/>               
        </header>

        <body>
        <div className="body-section">
          <div className="ip-section">
                <label className="">IP Address</label>
                <input
                  type="text"
                  class="form-control"
                  name="ip"
                  onChange={e => setIP(e.target.value)}
                  />
              </div>
              {info ? (
             <div className="det-section">
               <strong>details</strong> <br/>               
              {info.map((i) => {
          return (
            <div>
             <span>city : {i.city}</span><br/>
            <span>country: {i.country}</span><br/>
            <span>loc : {i.loc}</span><br/>
            <span>org:{i.org}</span><br/>
            <span>postal:{i.postal}</span><br/>
            <span>readme:{i.readme}</span><br/>
            <span>region:{i.region}</span><br/>
            <span>timezone:{i.timezone}</span><br/>
            </div>
          );
        })}
              </div>):(
                <div  className="det-section">
                  NO Data For this IP, make sure you fill correct IP 
                </div>
              )}

              </div>
<div>
              <DataChart/>
</div>
              </body>
              </div>
    );
  };
  export default Home;