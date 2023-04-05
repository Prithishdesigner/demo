import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from '../src/images/undraw_mobile_payments_re_7udl.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const [turnover, setTurnover] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  const handleTurnoverChange = (event) => {
    setTurnover(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  





  const notify = (params) => toast(params);





  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    

    if (validated) {



      if (turnover && name && phoneNumber && email) {
        
        const formData = {turnover, name, phoneNumber, email, isChecked};
    // const formData = {validated};

    fetch('https://backend-odxf-ny9zpnk4u-prithishdesigner.vercel.app/details', {
    // fetch('http://localhost:3020/details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // console.log(data.status);
      if(data.status == 400){
        notify("User already exist's")

      }else if(data.status == 200){
        notify("Details added successfully")
      }else{
        console.log(data.status)
      }
      
      
    })
    .catch(error => {
      console.error('Error:', error);
      notify("Failed to add Details")

    });
      
    } else {
      console.log('field missing');
      notify("Please fill all the fields")

    }

  }

    
  };

  return (
    <div>
       <ToastContainer />
       <div className='d-flex'>
    <Container>
    {/* <div class="col-lg-6 order-1 order-lg-2 mt-5" data-aos="zoom-in" data-aos-delay="150">
            <img src={Image} class="img-fluid" alt=""/>
          </div> */}
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="annual-form mt-5 mb-5">
      
    <div class="annual-turnover col-3 bg-info-subtle text-emphasis-info bg-gradient col-6 p-5">
      <Form.Group as={Col} controlId="formGridState" className="mb-3">
                <Form.Label class="form-label fw-semibold" style={{fontSize: '15px'}}>Annual Turnover</Form.Label>
                <Form.Select 
                defaultValue={null}
                placeholder="Annual Turnover"
                    value={turnover}
                    onChange={handleTurnoverChange}>
                  <option>Annual Turnover</option>
                  <option>1 Cr & Above</option>
                  <option>50 lac - 1 Cr</option>
                  <option>25 lac - 50 lac</option>
                  <option>10 lac - 25 lac</option>
                  <option>5 lac - 10 lac</option>
                  <option>Less than 5 lac</option>
                </Form.Select>
         </Form.Group>
     
        <Form.Group as={Col}  controlId="validationCustom01" className="mb-3">
          <Form.Label class="form-label fw-semibold" style={{fontSize: '15px'}}>Name</Form.Label>
          <Form.Control
           
            required
            type="text"
            placeholder="First name"
            value={name}
            onChange={handleNameChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col}  controlId="validationCustom02" className="mb-3">
          <Form.Label class="form-label fw-semibold" style={{fontSize: '15px'}}>Phone Number</Form.Label>
          <Form.Control
           pattern="[0-9]{10}"
            required
            type="tel"
            placeholder="Phone number" 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}         
          />       
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col}  controlId="exampleForm.ControlInput1" className="mb-3">
        <Form.Label class="form-label fw-semibold" style={{fontSize: '15px'}}>Email address</Form.Label>
        <Form.Control
        pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
        required 
        type="email" 
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        />
      </Form.Group>
      
    
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
      <Button type="submit">Apply Now</Button>
      </div>
    </Form>
    </Container>
    </div>
    


    </div>
  );
}

export default FormExample;