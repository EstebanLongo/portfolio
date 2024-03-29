import React from "react";
import "./techstack.css";
import img from "../../assets/mongoDB.png";
import image from "../../assets/sequelize.png";
import imgreact from "../../assets/react.png";

export default function TechStack() {
  return (
    <div className="divtechcontainer">
      <div className="skills" id="skills">
        <h2>Tech Stack:</h2>
      </div>

      <div className="techcontainter">
        <div className="techcontainter2">
          <div className="divimg">
            <img
              className="techstackimg"
              src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
              alt="img not found"
            />
            <p className="techname">HTML</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              alt="img not found"
            />
            <p className="techname">CSS</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="img not found"
            />
            <p className="techname">JAVASCRIPT</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              // src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
              src={imgreact}
              alt="img not found"
            />
            <p className="techname">REACT</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
              alt="img not found"
            />
            <p className="techname">TYPESCRIPT</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://raw.githubusercontent.com/existenzial/bbbasic/HEAD/imgs/node_logo.png"
              alt="img not found"
            />
            <p className="techname">NODE</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
              alt="img not found"
            />
            <p className="techname">EXPRESS</p>
          </div>

          <div className="divimg">
            <img className="techstackimg" src={img} alt="img not found" />
            <p className="techname">MONGO</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              // src="http://assets.stickpng.com/thumbs/58482ee4cef1014c0b5e4a75.png"
              srcSet={image}
              alt="img not found"
            />
            <p className="techname">SEQUELIZE</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
              alt="img not found"
            />
            <p className="techname">POSTGRE</p>
          </div>

          <div className="divimg">
            <img
              className="techstackimggh"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU"
              alt="img not found"
            />
            <p className="techname">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
