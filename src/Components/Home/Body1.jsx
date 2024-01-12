import React from 'react'
import { Link } from "react-router-dom";



import img from "../../imgs/bur.png"
import img1 from "../../imgs/chose.png"

function Body1() {
  return (
    <div className="body1">
      <div className="conteiner">
        <div className="head5">
          <h4>Home Page</h4>
          <h1>2 Unique Home Pages</h1>
          <p>We built each home page with a different style so that there is something for everyone.</p>
        </div>
        <div className="img3">
          <div className="body2">
            <Link to="/burger">
              <img src={img} alt="" />
            </Link>
            <h1>Home Version</h1>
            <Link to="/burger">
            <button>View Page1</button>
            </Link>
          </div>
          <div className="body2">
          <Link to="/kebab">
            <img src={img1} alt="" />
            </Link>
            <h1>Home version2</h1>
            <Link to="/kebab">
            <button>View Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body1
