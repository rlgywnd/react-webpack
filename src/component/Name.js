import React from "react";

const Name = ({setName}) => {
  

  const inputName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="name">
      <span>이름</span><input type='text' className="inputName" onChange={inputName}></input>
    </div>
  )
}

export default Name;