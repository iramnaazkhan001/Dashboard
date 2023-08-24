let employeedata={
    "Emp_id": "e64",
    "Emp_name": "Tanu khan",
    "Dept": "Admin",
    "Salary": 1600000
}
let  apiURL ="http://13.233.97.238:4000/addemployee";
let option={
method:"Post",
 headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'},
body: JSON.stringify(employeedata)
}
async function addData(){
let respose = await fetch (apiURL,option)
let result  = await respose.json();
console.log(result)

}
addData()