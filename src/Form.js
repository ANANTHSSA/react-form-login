
import React,{useState} from 'react';
import {useNavigate,Link,useParams,useLocation,useSearchParams} from 'react-router-dom';
import './Form.css'
// localStorage.setItem(JSON.stringify([]));

let arr=[];
// localStorage.setItem("value",JSON.stringify([]));


const Form = () => {
  const location = useLocation();
  // const{form} = location.state;
const geting = location.state;
// console.log(getPass);

const [getPass,passItem]=useState(geting)

  const [input1Value,setValue1]=useState(getPass ? getPass[0].name : '')
  const [input2Value,setValue2]=useState(getPass ? getPass[0].task : "")
  const [sumbit,formSumbit] = useState(false);
  const [value, setValue] = useState("notcomplete")
 
  const nava = useNavigate()

 
  
console.log(getPass);
  
    const dataInputs=(ssa)=>{
      console.log(ssa.target.value,ssa.target.name);
    
      if(ssa.target.name === "data1"){
        setValue1(ssa.target.value);
     
      }
     
      else{
        setValue2(ssa.target.value);

      }

    }
    const checkbox = (ssa)=>{
      
      if(ssa.target.checked){
        setValue('complete')
      }
      
     
    }

    
const buttonSubmit = (ssa)=>{
  ssa.preventDefault() ;
    setValue1("");
    setValue2("");
  formSumbit(true);
  if(input1Value === "" || input2Value === "")return
  // console.log(input1Value,input2Value,checking);

  const obj =
    {
      name:input1Value,
      desp: input2Value,
      completed:value
    }
    if(getPass != null){
        arr[getPass[1]]=obj;
    }
    else{
      arr.push(obj);
    }
   
   localStorage.setItem("value",JSON.stringify(arr));
}
// console.log(r);

  return (
    
    <div>
      <div>
    <section>
      <div className='container'>
         <div className='row justify-content-center'>
            <div className='col-2 p-1 home-btn bg-warning mt-3'>
               <Link to={'/Home'} className='form btn text-light'>Home page</Link>
               
            </div>
            <div className='col-5'>
              
            </div>
            <div className='col-2 p-1 home-btn bg-warning mt-3'>
            <Link to={'/'} className='form btn text-light'>Login page</Link>
            </div>
         </div>
      </div>
    </section>
  </div>
    <section>

      <div className='container'>
       
        <div className='row justify-content-center'>
          <div className='col-5'>
          <h2 className='text-center mb-2'>Attendance details</h2>
          
      <form onSubmit={ buttonSubmit} className='col-12 form border text-center  shadow py-3 bg-secondary'>
        <label >Email-Id</label><br></br>
        <input name='data1' onChange={dataInputs}  value={input1Value} className='mt-2'></input><br></br>
       {/* {input1Value === "" &&  sumbit && <div className='requred'>name is requred</div>} */}
       <label>Password</label><br></br>
        <input name='data2' onChange={dataInputs} value={input2Value}  className='mt-2'></input><br></br>
       {/* {input2Value === "" && sumbit && <div className='requred'>id is requred</div>} */}
      
       <input type='checkbox' onChange={checkbox} ></input><br></br>

        {/* <button onClick={()=> buttonSubmit()}>sumbit</button> */}
        <input type='submit' className='button bg-danger text-light mt-3'></input>
        
      </form>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Form