import React, { useEffect, useState } from 'react'

export default function Form() {
  const data = {name:"", email:"", password:""}
  const [inputData,setInputData] = useState(data)
  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
  }
  const [flag, setFlag] = useState(false)
  useEffect(()=>{
    console.log("Registered")
  },[flag])
  function handleSubmit(e){
    e.preventDefault()
    if(!inputData.name || !inputData.email || !inputData.password){
    alert("All Input Fields are Mandatory")
    }else{
      setFlag(true)
    }
  }
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
        <input type={"text"} value={inputData.name} onChange={handleData} placeholder="Enter your name" name='name'></input>
        </div>
        <div>
        <input type={"text"} value={inputData.email} onChange={handleData} placeholder="Enter your Email" name='email'></input>
        </div>
        <div>
        <input type={"text"} value={inputData.password} onChange={handleData} placeholder="Enter your Password" name='password'></input>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}
