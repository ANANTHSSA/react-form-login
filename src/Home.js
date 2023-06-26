import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom';
import './Form.css'




const Home = () => {

    const gets = JSON.parse(localStorage.getItem("value"));
    const [items,removeItems] = useState(gets);





   const handleDelete=(ssa)=>{
      delete gets[ssa];
      let a = gets.flat();
      localStorage.removeItem("value");
      localStorage.setItem("value",JSON.stringify(a));
      removeItems(a); 
   }

    
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5'>
          <div className='link'>
          <Link to='/Form/name/task/com' className='home btn text-light bg-danger'>Form page</Link>
          <div>
            <table className='table table-bordered mt-5 shadow '>
              <tr>
                <th>student-name</th>
                <th>task-name</th>
                <th>complete or uncomplete</th>
                <th>edit or delete</th>
              </tr>
             {items.map((value,i)=>{
              return<tr key={i} >
                <td>{value.name}</td>
                <td>{value.desp}</td>
                <td>{value.completed}</td>
                <td> <button onClick={()=>handleDelete(i)}><iconify-icon icon="material-symbols:delete-outline"></iconify-icon>
                </button><Link to="/Form/name/task/com" state={[{name:value.name,task:value.desp,com:value.completed},i]} ><iconify-icon icon="fa6-solid:pen-to-square"></iconify-icon></Link></td>
              </tr>
             })}
            </table>
        </div>
      </div>
    </div>
  
    </div>
     </div>
  )
}

export default Home