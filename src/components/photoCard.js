import React from "react";

const photoCard = ({title, url, explaination, date, copy}) => {
    return (
      <div >
        <h2>Title:{title}</h2>
          <img src ={url} alt="images"/>
          <p>Explaination: {explaination}</p>
          <span> Date: {date}</span>
          <span>CopyRight:{copy}</span>
        </div>
    );
  };
  export default photoCard;
  