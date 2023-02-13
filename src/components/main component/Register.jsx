import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../Style/regiter.css"



export default function Register(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function userSave(e){
        e.preventDefault()
        axios.post("http://localhost:2022/users", {
            userName:e.target.name.value,
            password:e.target.password.value,
            email:e.target.eMail.value,
            sureName: e.target.sureName.value,
            phone: e.target.phoneNumber.value,
            date: new Date().toLocaleDateString(),
            



        })
    }


    return(<>
    
      <button onClick={handleShow} className="button2">Бүртгүүлэх</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='register-body'>
                <form onSubmit={userSave}>

                    <section>
                        <p>neree bichnuu</p>
                        <input type="text" name='name' />

                    </section>
                    <section>
                        <p>shine passwordoo hiine uu</p>
                        <input type="text" name='password' />
                    </section>
                    <section>
                        <p>utasnii dugaar oruulna uu</p>
                        <input type="text" name='phoneNumber' />
                    </section>
                    <section>
                        <p>ovogoo oruulna uu</p>
                        <input type="text" name='sureName' />
                    </section>
                    <section>
                        <p>email hayagaa oruulna uu</p>
                        <input type="text" name='eMail' />
                    </section>
                <button type='submit' onClick={handleClose}>Бүртгүүлэх</button>
                </form>
            </div>
            


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    
    </>)
}