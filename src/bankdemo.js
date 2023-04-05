import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Container, Image } from 'react-bootstrap';
import bullet from '../src/images/bullet.jpg';



function Bankdemo() {

    const [selectedOption, setSelectedOption] = useState('option1');

  const [option, setOption] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [agreed, setAgreed] = useState(null);

    const options = [
      { value: 'Cash Credit', label: 'Cash Credit' },
      { value: 'Overdraft', label: 'Overdraft' },
      { value: 'Term Loan', label: 'Term Loan' },
      { value: 'General Calculator', label: 'General Calculator' },
    ];
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  

    const [value, setValue] = useState('');
  
    function handleClick(event) {
      const buttonValue = event.target.value;
      
      if (buttonValue === '=') {
        setValue(eval(value));
      } else if (buttonValue === 'C') {
        setValue('');
       } else if (buttonValue === 'D') {  // Add new condition for delete button
          setValue(value.slice(0, -1));  // Remove last character from value
      }else if (buttonValue === '.') {  // Add new condition for decimal button
      setValue(value + '.');
      }else if (buttonValue === '%') {  // Add new condition for percentage button
      setValue(eval(value + '/100'));
      }else {
        setValue(value + buttonValue);
      }
     

    
   


    };


  return (
    <div className="App">



      <div className="bank-demo"> 
      <Container>
      <div className="shadow-lg p-2 mb-5 bg-body-tertiary rounded">
        <div className='d-flex ty-fa'>
        <div>
        <h3 className='' style={{}}>Types of Facilities</h3>
        </div>
        <div>
      {options.map((option) => {
      return ( 
       <>
       
       <input
       className='op-te'
         type="radio"
         value={option.value}
         checked={selectedOption === option.value}
         onChange={handleOptionChange}
       />
       
         <label className='ms-2'  key={option.value}>
       {option.value}
         </label>

       </>
         
        
      )})}
      </div>
      </div>



              
             

{selectedOption === 'Cash Credit' && (
     <div className="m-5 card p-3 shadow merchant" style={{marginBottom:100}}>
            
     <nav className="d-flex mt-5" style={{justifyContent:'center'}}>
         <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
             <button className="nav-link active" id="nav-Benefits-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-Benefits" type="button" role="tab"
                 aria-controls="nav-Benefits" aria-selected="true">Calculate</button>


             <button className="nav-link" id="nav-POSMachine-tab" data-bs-toggle="tab" data-bs-target="#nav-POSMachine"
                 type="button" role="tab" aria-controls="nav-POSMachine" aria-selected="false">Documents Required</button>




         </div>
     </nav>
     <div className="tab-content p-3" id="nav-tabContent">
         <div className="tab-pane fade active show" id="nav-Benefits" role="tabpanel"
             aria-labelledby="nav-Benefits-tab">
           <div>
            <div className='d-flex justify-content-center mt-4 mb-4'>
           <p className='mt-1'>Business Activity</p>
      <select onChange={(e) => setOption(e.target.value)} className="form-control ms-4 h-50 w-25" type="text" placeholder="Default input" aria-label="default input example" style={{}}>
        
        <option>Select an option</option>
        <option value="option1">Manufacturing</option>
        <option value="option2">Trading</option>
        <option value="option3">Services</option>
        <option value="option4">Others</option>
      </select>
            </div>




      {option === "option1" && (
        <div>
          <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
            type="text"
            maxLength={7}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
            <label className='me-4'>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
             <span className='ms-2'>Yes</span> 
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
             <span className='ms-2'>No</span>
            </label>
          </div>

          {agreed === "yes" ? (
            <div >
              <button type='button' class="btn btn-primary mb-4"  onClick={() => setResult(amount / 5)} >Calculate</button>
              <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
            </div>
          ) : (
            <div>
              <p>
                Please click on 'Request Callback' & our representative will
                contact you for a customized deal.
              </p>
            </div>
          )}
        </div>
      )}









      {option === "option2" && (
       <div>
         <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
            type="text"
            maxLength={7}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
            
            <label className='me-4'>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
              <span className='ms-2'>Yes</span> 
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
              <span className='ms-2'>No</span>
            </label>
          </div>

          {agreed === "yes" ? (
            <div>
              <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
              <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
            </div>
          ) : (
            <div>
              <p>
                Please click on 'Request Callback' & our representative will
                contact you for a customized deal.
              </p>
            </div>
          )}
        </div>
      )}








      {option === "option3" && (
       <div>
        <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          
       <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
         type="text"
         maxLength={7}
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
       /></div>
        <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
      
         <label className='me-4'>
           <input
             type="radio"
             value="yes"
             checked={agreed === "yes"}
             onChange={() => setAgreed("yes")}
           />
           <span className='ms-2'>Yes</span>
         </label>
         <label>
           <input
             type="radio"
             value="no"
             checked={agreed === "no"}
             onChange={() => setAgreed("no")}
           />
           <span className='ms-2'>No</span>
         </label>
       </div>

       {agreed === "yes" ? (
         <div>
           <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
           <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
         </div>
       ) : (
         <div>
           <p>
             Please click on 'Request Callback' & our representative will
             contact you for a customized deal.
           </p>
         </div>
       )}
     </div>
      )}







      {option === "option4" && (
        <div>
          <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
        <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
          type="text"
          maxLength={7}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /></div>
        <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
          <label className='me-4'>
            <input
              type="radio"
              value="yes"
              checked={agreed === "yes"}
              onChange={() => setAgreed("yes")}
            />
           <span className='ms-2'>Yes</span>
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={agreed === "no"}
              onChange={() => setAgreed("no")}
            />
            <span className='ms-2'>No</span>
          </label>
        </div>

        {agreed === "yes" ? (
          <div>
            <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
            <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
          </div>
        ) : (
          <div>
            <p>
              Please click on 'Request Callback' & our representative will
              contact you for a customized deal.
            </p>
          </div>
        )}
      </div>
      )}
    </div>
       </div>


       <div className="tab-pane fade"  id="nav-POSMachine" role="tabpanel" aria-labelledby="nav-POSMachine-tab">
             <div className='d-flex '>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Application Form</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Last 2 years Audited Financial statements.</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Last 6 months Bank statements</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Undertaking from Borrower regarding Laminated Documents (For Takeover Cases)</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Copy of the sanction letter of the existing bank (For Takeover Cases)</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>ITR of latest completed FY</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Sales (VAT) Tax Return of latest completed FY</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>KYC Documents</p>
             </div>
       </div>

 </div>

           
         </div>




)}



{selectedOption === 'Overdraft' && (
     <div className="m-5 card p-3 shadow merchant" style={{marginBottom:100}}>
            
     <nav className="d-flex mt-5" style={{justifyContent:'center'}}>
         <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
             <button className="nav-link active" id="nav-Benefits-tab" data-bs-toggle="tab"
                 data-bs-target="#nav-Benefits" type="button" role="tab"
                 aria-controls="nav-Benefits" aria-selected="true">Calculate</button>


             <button className="nav-link" id="nav-POSMachine-tab" data-bs-toggle="tab" data-bs-target="#nav-POSMachine"
                 type="button" role="tab" aria-controls="nav-POSMachine" aria-selected="false">Documents Required</button>




         </div>
     </nav>
     <div className="tab-content p-3" id="nav-tabContent">
         <div className="tab-pane fade active show" id="nav-Benefits" role="tabpanel"
             aria-labelledby="nav-Benefits-tab">
          
          <div>
            <div className='d-flex justify-content-center mt-4 mb-4'>
           <p className='mt-1'>Business Activity</p>
      <select onChange={(e) => setOption(e.target.value)} className="form-control ms-4 h-50 w-25" type="text" placeholder="Default input" aria-label="default input example" style={{}}>
        
        <option>Select an option</option>
        <option value="option1">Manufacturing</option>
        <option value="option2">Trading</option>
        <option value="option3">Services</option>
        <option value="option4">Others</option>
      </select>
            </div>




      {option === "option1" && (
        <div>
          <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
            type="text"
            maxLength={7}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
            <label className='me-4'>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
             <span className='ms-2'>Yes</span> 
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
             <span className='ms-2'>No</span>
            </label>
          </div>

          {agreed === "yes" ? (
            <div >
              <button type='button' class="btn btn-primary mb-4"  onClick={() => setResult(amount / 5)} >Calculate</button>
              <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
            </div>
          ) : (
            <div>
              <p>
                Please click on 'Request Callback' & our representative will
                contact you for a customized deal.
              </p>
            </div>
          )}
        </div>
      )}









      {option === "option2" && (
       <div>
         <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
            type="text"
            maxLength={7}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
            
            <label className='me-4'>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
              <span className='ms-2'>Yes</span> 
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
              <span className='ms-2'>No</span>
            </label>
          </div>

          {agreed === "yes" ? (
            <div>
              <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
              <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
            </div>
          ) : (
            <div>
              <p>
                Please click on 'Request Callback' & our representative will
                contact you for a customized deal.
              </p>
            </div>
          )}
        </div>
      )}








      {option === "option3" && (
       <div>
        <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
          
       <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
         type="text"
         maxLength={7}
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
       /></div>
        <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
      
         <label className='me-4'>
           <input
             type="radio"
             value="yes"
             checked={agreed === "yes"}
             onChange={() => setAgreed("yes")}
           />
           <span className='ms-2'>Yes</span>
         </label>
         <label>
           <input
             type="radio"
             value="no"
             checked={agreed === "no"}
             onChange={() => setAgreed("no")}
           />
           <span className='ms-2'>No</span>
         </label>
       </div>

       {agreed === "yes" ? (
         <div>
           <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
           <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
         </div>
       ) : (
         <div>
           <p>
             Please click on 'Request Callback' & our representative will
             contact you for a customized deal.
           </p>
         </div>
       )}
     </div>
      )}







      {option === "option4" && (
        <div>
          <div className='d-flex justify-content-center mb-4' style={{marginRight:'210px'}}>
          <p className='me-4 mt-1'>Sales Turnover (of latest Financial Year)</p>
        <input className="form-control w-25" placeholder="Default input" aria-label="default input example"
          type="text"
          maxLength={7}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /></div>
        <div className='d-flex justify-content-center '>
            <p className='me-4'>Was your Business Profitable as per Latest P & L Statement ?</p>
          <label className='me-4'>
            <input
              type="radio"
              value="yes"
              checked={agreed === "yes"}
              onChange={() => setAgreed("yes")}
            />
           <span className='ms-2'>Yes</span>
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={agreed === "no"}
              onChange={() => setAgreed("no")}
            />
            <span className='ms-2'>No</span>
          </label>
        </div>

        {agreed === "yes" ? (
          <div>
            <button type='button' class="btn btn-primary mb-4" onClick={() => setResult(amount / 6)}>Calculate</button>
            <p>Congratulations! You are eligible for a Working Capital facility of: {result.toFixed(2)}</p>
          </div>
        ) : (
          <div>
            <p>
              Please click on 'Request Callback' & our representative will
              contact you for a customized deal.
            </p>
          </div>
        )}
      </div>
      )}
    </div>
     
       </div>


       <div className="tab-pane fade"  id="nav-POSMachine" role="tabpanel" aria-labelledby="nav-POSMachine-tab">
             <div className='d-flex '>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Application Form</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Last 2 years Audited Financial statements.</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Last 6 months Bank statements</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Undertaking from Borrower regarding Laminated Documents (For Takeover Cases)</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Copy of the sanction letter of the existing bank (For Takeover Cases)</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>ITR of latest completed FY</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>Sales (VAT) Tax Return of latest completed FY</p>
             </div>
             <div className='d-flex'>
               <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
               <p>KYC Documents</p>
             </div>
       </div>

 </div>

           
         </div>

)}


{selectedOption === 'Term Loan' && (
      <div className="m-5 card p-3 shadow merchant" style={{marginBottom:100}}>
            
      <nav className="d-flex mt-5" style={{justifyContent:'center'}}>
          <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-Benefits-tab" data-bs-toggle="tab"
                  data-bs-target="#nav-Benefits" type="button" role="tab"
                  aria-controls="nav-Benefits" aria-selected="true">Calculate</button>
 
 
              <button className="nav-link" id="nav-POSMachine-tab" data-bs-toggle="tab" data-bs-target="#nav-POSMachine"
                  type="button" role="tab" aria-controls="nav-POSMachine" aria-selected="false">Documents Required</button>
 
 
 
 
          </div>
      </nav>
      <div className="tab-content p-3" id="nav-tabContent">
          <div className="tab-pane fade active show" id="nav-Benefits" role="tabpanel"
              aria-labelledby="nav-Benefits-tab">
          <form >



          <form className="row g-3 mt-3" style={{justifyContent:'center'}}>
          <div className="col-auto ">
          <label for="staticEmail2" className="mt-1">Loan Amount You Need</label>
          {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
           </div>
          <div className="col-auto">
            {/* <label for="inputPassword2" class="visually-hidden">Lakhs</label> */}
            <input type="password" className="form-control" id="inputPassword2" placeholder="Lakhs"></input>
          </div>
          <div className="col-auto ms-5">
            <label for="staticEmail2" className="mt-1">For</label>
            {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
          </div>
          <div className="col-auto">
            {/* <label for="inputPassword2" class="visually-hidden">Password</label> */}
            <input type="password" className="form-control" id="inputPassword2" placeholder="Years"></input>
          </div>


          <p className='fw-semibold m-5 fs-5'>Please input figures as per latest or projected P&L statement for next year.</p>
     
         </form>


    
        
        <div className="d-flex mb-4" style={{justifyContent:'center',marginLeft:'50px'}}>
          <label for="staticEmail2" className="pe-3 mt-1">Profit after Tax</label>
          {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
          <input type="password" className="form-control" style={{width:'228px'}} id="inputPassword2" placeholder="Lakhs"></input>
           </div>
           <div className="d-flex mb-4 " style={{justifyContent:'center', marginLeft:'31px'}}>
          <label for="staticEmail2" className="pe-3 mt-1">Interest Expenses</label>
          {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
          <input type="password" className="form-control w-25" id="inputPassword2" placeholder="Lakhs"></input>
           </div>
           <div className="d-flex mb-4" style={{justifyContent:'center'}}>
          <label for="staticEmail2" className="pe-3 mt-1">Depreciation Expenses</label>
          {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
          <input type="password" className="form-control me-1"  style={{width:'228px'}} id="inputPassword2" placeholder="Lakhs"></input>
           </div>
           <div className="d-flex mb-4" style={{justifyContent:'center',marginLeft:'50px'}}>
          <label for="staticEmail2" className="pe-3 mt-1 ms-2">Total Accruals</label>
          {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value=""></input> */}
          <input type="password" className="form-control" style={{width:'228px'}} id="inputPassword2" placeholder="Lakhs"></input>
           </div>
          
          



  
 
            <div >
              <button className="btn btn-primary mt-4" type="submit" >Calculate</button>
            </div>
          </form>
        </div>
 
 
        <div className="tab-pane fade"  id="nav-POSMachine" role="tabpanel" aria-labelledby="nav-POSMachine-tab">
              <div className='d-flex '>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Application Form</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Last 2 years Audited Financial statements.</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Last 6 months Bank statements</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Undertaking from Borrower regarding Laminated Documents (For Takeover Cases)</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Copy of the sanction letter of the existing bank (For Takeover Cases)</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>ITR of latest completed FY</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>Sales (VAT) Tax Return of latest completed FY</p>
              </div>
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p>KYC Documents</p>
              </div>

             
              <div className='d-flex'>
                <img src={bullet} className='pt-1' style={{height:'22px', width:'20px'}} alt='images'/>
                <p >CMA Data including :</p> 

              </div>
                    <div className='d-flex ms-3'>
                     <ul>
                      <li>Financial projections for the total tenure of Term Loan</li>
                      <li>DSCR calculation for term loan (if any) for total tenure</li>
                     </ul>
                    </div>
             
        </div>
 
  </div>
 
            
          </div>


)}

{selectedOption === 'General Calculator' && (
     
//       <div className="calculator mx-auto mb-5">

// <input type="text" className="calculator-screen z-depth-1" value="" disabled />

// <div className="calculator-keys" >

//   <button type="button" className="operator btn btn-info" value="+">+</button>
//   <button type="button" className="operator btn btn-info" value="-">-</button>
//   <button type="button" className="operator btn btn-info" value="*">&times;</button>
//   <button type="button" className="operator btn btn-info" value="/">&divide;</button>

//   <button type="button" value="7" className="btn btn-light waves-effect">7</button>
//   <button type="button" value="8" className="btn btn-light waves-effect">8</button>
//   <button type="button" value="9" className="btn btn-light waves-effect">9</button>


//   <button type="button" value="4" className="btn btn-light waves-effect">4</button>
//   <button type="button" value="5" className="btn btn-light waves-effect">5</button>
//   <button type="button" value="6" className="btn btn-light waves-effect">6</button>


//   <button type="button" value="1" className="btn btn-light waves-effect">1</button>
//   <button type="button" value="2" className="btn btn-light waves-effect">2</button>
//   <button type="button" value="3" className="btn btn-light waves-effect">3</button>


//   <button type="button" value="0" className="btn btn-light waves-effect">0</button>
//   <button type="button" className="decimal function btn btn-secondary" value=".">.</button>
//   <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

//   <button type="button" className="equal-sign operator btn btn-default" style={{backgroundColor:'#0dcaf0'}} value="=">=</button>

// </div>
// </div>
<div className='mx-auto rounded-3 mb-5'  style={{backgroundColor:'#2a2e37', width:'270px'}}>
  
<input type="text" className='answer' value={value} disabled />





<div className='p-2'>
<div className='d-flex justify-content-around '>
<button onClick={handleClick} className='ash m-2' value="1">1</button>
<button onClick={handleClick} className='ash m-2 ' value="2">2</button>
<button onClick={handleClick} className='ash m-2 ' value="3">3</button>
<button onClick={handleClick} className='ash m-2 arithmetic' value="+">+</button>
</div>






<div className='d-flex justify-content-around'>
<button onClick={handleClick} className='ash  m-2' value="4">4</button>
<button onClick={handleClick} className='ash  m-2' value="5">5</button>
<button onClick={handleClick} className='ash  m-2' value="6">6</button>
<button onClick={handleClick} className='ash  m-2 arithmetic' value="-">-</button>
</div>





<div className='d-flex justify-content-around'>
<button onClick={handleClick} className='ash m-2' value="7">7</button>
<button onClick={handleClick} className='ash m-2' value="8">8</button>
<button onClick={handleClick} className='ash m-2' value="9">9</button>
<button onClick={handleClick} className='ash m-2 arithmetic' value="*">*</button>
</div>





<div className='d-flex justify-content-around'>
<button onClick={handleClick} className='ash m-2' value="0">0</button>
<button onClick={handleClick} className='ash m-2 arithmetic' value=".">.</button>


<button onClick={handleClick} className='ash m-2 arithmetic' value="/">/</button>
<button onClick={handleClick} className='ash m-2 arithmetic' value="%">%</button>
</div>

<div className='d-flex'>
<button onClick={handleClick} className='ash m-2' style={{color:'#d291f6'}} value="C">C</button>
<button onClick={handleClick} className='ash m-2 arithmetic' value="D">Del</button>
 

<button onClick={handleClick} className='ash m-2 arithmetic' style={{width:'120px'}} value="=">=</button>
</div>



</div>
</div>

)}
   


      </div>
    </Container>

      </div>
 
    </div>
  );
}

export default Bankdemo;
