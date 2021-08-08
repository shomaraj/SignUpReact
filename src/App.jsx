import React, { useState } from "react";
import axios from "axios";

// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [mouseOver, setMouseOver] = useState(false);

  const [signUpState, setSignUpState]= useState({
    username:"",
    password:"",
    email:""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setSignUpState(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }


  //  function handleChangeUserName(event){
  //   setSignUpState({username:event.target.value});
  //  }

  // function handleChangePassword(event){
  //   setSignUpState({password:event.target.value});
  //   }

  //  function handleChangeEmail(event){
  //     setSignUpState({email:event.target.value});
  //     }

      function handleMouseOver() {
        setMouseOver(true);
      }
    
      function handleMouseOut() {
        setMouseOver(false);
      }

      function onSubmit(event){
         event.preventDefault();

         const registered = {
           username:signUpState.username,
           password:signUpState.password,
           email:signUpState.email
         }
      
//post the data to specified endpoint connect frontend & Backend 
     axios.post("http://localhost:4000/app/signup", registered)
     .then(response=>{
       console.log(response.data);
     });
     setSignUpState({
      username:"",
      password:"",
      email:"" });
     }
  
  return (
    <div className="App">
      <div className="container">
      <h1>Welcome to SignUp</h1>

         <div className="form-div">
           <form >
             <input className="form-control form=group" type="text"  name="username" placeholder="Enter username" 
               value={signUpState.username}
               onChange={handleChange}  
             />
             <input className="form-control form=group" type="password"  name="password"
               placeholder="Enter password" 
               value={signUpState.password}
               onChange={handleChange} 
              />
             <input className="form-control form=group" type="email" name ="email" 
               placeholder="Enter mail ID" value={signUpState.email}
               onChange={handleChange} 
             />

             <button  
                style={{ backgroundColor: mouseOver ? "black" : "white" }}
                onClick={onSubmit}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} type="submit">SUBMIT </button>
              
           </form>

         </div>
      </div>
    </div>
  );
}

export default App;
