import { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import './App.css';

function Radio() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { value: 'option1', label: 'Cash Credit' },
    { value: 'option2', label: 'Overdraft' },
    { value: 'option3', label: 'Term Loan' },
    { value: 'option4', label: 'General Calculator' },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div >
      <Container className='diff-types text-center ' style={{}}>
      {options.map((option) => (
        <label   key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}</Container>


      <div>
     <Container>
        
      {selectedOption === 'option1' && (
        <Container>
         

          <div className='calculate'>
          <div className=" shadow p-3 mb-5 bg-body-tertiary rounded ">
            <span className="border border-white" >
              <form >
                



                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label fw-semibold" style={{fontSize: 15}}>Business Activity</label>

                  <select className="form-select form-select-sm w-75"  aria-label=".form-select-sm example">
                    <option selected>Manufacturing</option>
                    <option value="1">Trading</option>
                    <option value="2">Service</option>
                    <option value="3">Others</option>

                  </select>
                </div>



                <div className="col-auto">

                  <label for="exampleFormControlInput1" className="form-label fw-semibold" style={{fontSize: 15}} >Sales Turnover
                    (of latest Financial Year)</label>
                </div>
                <div className="input-group w-75 mb-4">
                  <span className="input-group-text" >₹</span>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                  <span className="input-group-text">.00</span>
                </div>



                <div className='d-flex'>
                  <h6>Was your Business Profitable as per Latest P & L Statement </h6>
                  <div className="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check ms-4 mb-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault2"  checked></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>


                <div >
                  <button className="btn btn-primary" type="submit" disabled>Calculate</button>
                </div>
              </form>
            </span>
          </div>









        </div>
        </Container>
      )}





        {selectedOption === 'option2' && (
        
        <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>)}



        {selectedOption === 'option3' && (
        <div class="list-group mb-5">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>)}

        {selectedOption === 'option4' && (<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>)}
</Container>
      </div>
      
    </div>
    
  );
}

export default Radio;
