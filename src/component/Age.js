import React from "react";

const Age = ({setAge}) => {
  
  
  const inputAge = (e) => {
    setAge(e.target.value);
  }


  return (
    <div className="age">
      <span>나이</span><input type='text' className="inputAge"onChange={inputAge}></input>
    </div>
  )
}

export default Age;