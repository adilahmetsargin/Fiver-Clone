import React from "react";
import "./Featured.scss";
import { AiOutlineSearch } from "react-icons/ai";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <AiOutlineSearch
                color="black"
                style={{ margin: "10px" }}
                size="20px"
              />

              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png"
            alt=""
          />
          <span className="text">Sargin, Ahmet</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
