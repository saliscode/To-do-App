import React,{useState} from 'react';

const EditUser = (props) => {
    const [age,setAge]=useState(props.user.age);
    const [name,setName]=useState(props.user.name);

const handleEdit=(e)=>{
    e.preventDefault()
    const newPerson={
        name:name,
        age:age,
        id:props.user.id
    }
    props.edit(newPerson)
}
console.log(age);
    return (
        <div>
<form onSubmit={handleEdit}>
    
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
            <button >
                Edit
            </button>

</form>
        </div>
    );
}

export default EditUser;
