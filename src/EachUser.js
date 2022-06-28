 import React,{useState} from 'react';
 import { Button,Modal } from 'react-bootstrap';
import EditUser from './EditUser';

/*parent (EndUser)sending props of (name n age) to child(Users.js)*/
const EachUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDelete = (e) => {
    e.preventDefault()
    props.delete(props.user.id)
  }
 
  
  return (

    <>
      <div className='each-user'>
        <div className='student-row'>          
          <h4 className='text'>Name: {props.user.name} {/*W're passing dis as props to the Users.js*/}</h4>
          <p className='text'>Gen: {props.user.age} {/*W're passing dis as props to the Users.js*/} </p>
          {/* <button className='delete-btn' onClick={handleEdit}>Edit</button> */}
        
        <button className='delete-btn' onClick={handleDelete}>Delete</button>
        <button className='delete-btn' onClick={handleShow}>Edit</button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser user={props.user} edit={props.edit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Edit
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>Add</Button> */}
        </Modal.Footer>
      </Modal>
      </div>
      <hr />
    </>
  );
}


export default EachUser;
