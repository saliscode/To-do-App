import "./App.css";
import React, {useState} from "react";
import Users from "./Users";
import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  /*a2*/const [name,setName]= useState('')
  /*a2*/const [age,setAge]= useState('')

  //This hook was newly created to be able to monitor 
  //the change in both the age, and name   
  /*as a single entity-ie the name and age values repesents a single entity (a person) */
  const [person,setPerson]=useState([])

  //b2This code handles the submission of the form
  //We r basically saying that when an event of submittion occurs setPerson should 
  //take all de the current values(rep by the 'person'), join it together
  // with the new (name, age=> rep by newPerson) and id entered and display them together. 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newPerson={name:name, age:age, id:uuidv4()};
    setPerson([...person,newPerson]);
    // The newly created newPerson is an object that contains name, age 
    // and an id as properties. 
  }///....../b1 So the setPerson will now be a list of the old input data abt each previous
  // (...represented by the spread operator ...person) and the new one ( represented by the newPerson ) 

  const deletePerson=(id)=>{
  const newPersons= person.filter((item)=>item.id!==id);
    setPerson(newPersons)/*you are basically saying that it shld filter the 
                          item by comparing the id of each item to 
                          dat of the random id, if it is delete, else make the set*/
                      }

  const handleEdit =(newPerson)=>{
    const editPerson = person.map((item)=>{
      if(item.id === newPerson.id){
        return newPerson
      }
    });
    setPerson(editPerson)
  }

  return (
    <>
    <div>
    <div className="header-n-navbar">
      <div className="header">
        <h2>CODETRAIN</h2>
        <p>Student Portal</p>
      </div>  
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Register</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  
     <div className="row"> 
      <div className="join-side">
         <form onSubmit={/*b1*/handleSubmit}>
          <label>Name:<br/> 
            <input className='input' 
              placeholder="Your name"
              required="required"
              
              value={name}//this is the value representing what was input my the user at any given time.
              
              //a1Meaning upon event of change setName-which is monitoring the change in value
              //in the input field-should target this value.
              onChange={(e)=>{setName(e.target.value)}}
            />
          </label>
            <br/>
            <br/>
            <label>Gen:<br/>
              <input className='input' 
                placeholder="Gen ?..."
                required="required"
                
                value={age} 
                //a1Meaning upon event of change setName/setAge ie. which is monitoring the change in value
                //in the input field-should target this value.
                onChange={(e)=>{setAge(e.target.value)}}
                />
            </label>
            <br/>  
            <br/>
            <p className="register">Register here....</p>
            <button className="join-btn">JOIN CLASS</button>
          </form>
      </div>
      <div className="list-side">
            <Users persons={person}                   
                  delete={deletePerson} 
                  edit={handleEdit}/>
      </div>
            
           </div>    
           </div>   
      <div className="footer">
        <h2>Footer</h2>
      </div>
  </>
  );
}

export default App; 
 