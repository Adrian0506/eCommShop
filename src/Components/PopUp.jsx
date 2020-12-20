
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import request from 'request';
import axios from 'axios';


import react, {useState} from 'react';

let username = null;
let password = null; 

function handleSignUp (username, password) {
  // set the admin privelege to either true or false.
  // if there is admin privlege render admin page
  // from admin page add items.

  var options = {
    'method': 'POST',
    'uri': 'http://127.0.0.1:3000/signup',
      'json': {
      'username':  username,
      'password':  password,
      'admin': false 
    }
  };

   console.log('click');
   console.log(username)
   console.log(password);
   request(options, (err, resp, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp);
      }
   });
 }


 const SetCurrentData =  (e) => {

   username = e.target.value;
   console.log(username)

 };

const SetPasswordData = (e) => {
   password = e.target.value;
   console.log(password)
}
 

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sign Up!</Modal.Body>
        <input type = 'text' onChange = {SetCurrentData.bind(this)}></input>
        <input type = 'text' onChange = {SetPasswordData.bind(this)}></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} onClick = {() => handleSignUp(username, password)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default PopUp;