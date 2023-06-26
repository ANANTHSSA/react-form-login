import { useState } from "react"
 import {useNavigate} from 'react-router-dom';
import './Form.css' 
 
 const Login = () => {

    const [inputValue,inputName]=useState("");
    const [input1Pass,inputPass]=useState("");
    const [requred,formRequred]=useState(false);

    const nava = useNavigate();

    const formInput=(ssa)=>{
        if(ssa.target.name === "name" ){
            inputName(ssa.target.value)
        }
        else{
          inputPass(ssa.target.value)
        }
        
    }

   
    const formSubmit=(ssa)=>{
        ssa.preventDefault();
        formRequred(true)
        if(inputValue === "" || input1Pass === "")return

        const users = [
          {
            name:"rajesh",
            password:"12345",
          },
          {
            name:"priya",
            password:"12345",
          },
          {
            name:"dharsan",
            password:"12345",
          },
          {
            name:"anand",
            password:"12345",
          },
          {
            name:"ssa",
            password:"12345",
          },
        ]

        let check = users.find((ssa)=>ssa.name === inputValue && ssa.password === input1Pass)
        console.log(check);
        if(check){
        nava('/Form/name/task/com');
        }
    }

   return (
     <div className="d-flex justify-content-center mt-3 p-2">
       <form onSubmit={formSubmit} className="form1 shadow py-4 bg-secondary">
        <h2 className="pt-3 pb-2 text-warning">LOGIN</h2>
        <label className="d-flex justify-content-center">Name</label>
            <input name="name" type='text' onChange={formInput} value={inputValue} className="mt-4 mb-3 p-1"></input><br></br>
       {inputValue === "" &&  requred && <div className="requred">name is requred</div>}

            <label  className="d-flex justify-content-center">Password</label>
            <input name="pass" type='password' onChange={formInput} value={input1Pass} className="p-1"></input ><br></br>
       {input1Pass === "" &&  requred && <div className="requred">pass is requred</div>}

            <input type='submit' className="button text-light bg-danger mt-3"></input>

        </form> 
     </div>
   )
 }
 
 export default Login