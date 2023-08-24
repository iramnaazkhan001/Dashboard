import { useState } from "react"
import React from 'react'

export default function FetchPost() {
    // import { MainFunc } from "./FetchCommon.js"
   
    let[EMP_ID,setEmpID]=useState('1')
    let[EMP_name,setEmpName]=useState('r')
    let[EMP_dept,setEmpDept]=useState('s')
    let[EMP_salary,setEmpSalary]=useState('11')

    let empid=(e)=>{
        setEmpID(e.target.value)
    }
    let empname=(e)=>{
        setEmpName(e.target.value)
    }
    let empdept=(e)=>{
        setEmpDept(e.target.value)
    }
    let empsalary=(e)=>{
        setEmpSalary(e.target.value)
    }
// let empID='e45'
let employeeData=
{
"Emp_id": EMP_ID,
"Emp_name":EMP_name,
"Dept":EMP_dept,
"Salary": EMP_salary
}
let apiURL='http://13.233.97.238:4000/addemployee/'
let option={
    method:"POST",
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(employeeData)
}

async function updateData(){
    let response = await fetch(apiURL,option)
    let finalData=await response.json()
    // console.log(finalData)
    if(finalData.affectedRows===0){
        console.log('Record does not exist or Employee does not exist')
    }
    else{
        console.log('Total records updated succesfully \n',finalData.affectedRows)

    }
}
// updateData()
// MainFunc(apiURL,option)
  return (
    <div>
      {/* employee delete */}
      {/* <label htmlFor="">Employee ID</label> */}
      <input type="text" value={EMP_ID} onChange={empid}/>
      <input type="text" value={EMP_name} onChange={empname}/>
      <input type="text" value={EMP_dept} onChange={empdept}/>
      <input type="text" value={EMP_salary} onChange={empsalary}/>
      <button onClick={updateData}>submit</button>
     
    </div>
  )
}