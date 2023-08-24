// import React, { useState } from 'react'

// function Delete() {
//     let [message,setMessage]=useState("hiiiiiii")
//     let [empid,setEmpid]=useState("")
//     // let empid='e125';
// let  apiURL =`http://13.233.97.238:4000/deleteemployee/${empid}`;
// let option={
//     method:"DELETE",
// }
// let DeleteData= async ()=>{
//     let respose = await fetch (apiURL,option)
//     let result  = await respose.json();
//     console.log(result)
//     if(result.affectedRows<1){
//         console.log(`${empid} not found`)
//         setMessage(`${empid} not found`)
//     }
// else{
// console.log(`${result.affectedRows}found`)
// setMessage(`${result.affectedRows}found`)
// }
// }
// DeleteData();
//   return (
//     <> 
//     <h2>employee Delete </h2>
//     <label>Enter your data</label>
//     <input value={empid} onChange={(e)=>setEmpid(e.target.value)}/>
//     <h4>Message<span>{message}</span></h4>
    
//     </>
//   )
// }

// export default Delete