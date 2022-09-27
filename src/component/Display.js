import React from "react";


const Display = ({name,age}) => {

  const isNameOrAge = name || age ? `나이는 ${age}세인 ${name}이라고 합니다!` : '프로필을 적어주세요'
  console.log(name, age);

  return (
    <div className="display">{isNameOrAge}</div>
  )
}

export default Display;