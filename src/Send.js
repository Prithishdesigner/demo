import logo from './logo.svg';
import './App.css';


function Send() {

var laptop='apple';


if (laptop == 'react'){

  console.log(laptop);

}else {
  console.log('no data')
}

function myFunction() {
  console.log('paragraph changed');
}


  function handleClick() {
    console.log('Button clicked!');
  }


  // function parachange() {
  //   var freek = 'dimond'
  //   console.log("Paragraph changed.");
  // }








  

  return (
    <div className="App">
      
      <p className="just">hi hello</p>
      <p>{laptop}</p>
      

      <h2>Demo JavaScript in Head</h2>
      <h1>Prithish, {myFunction}</h1>


        <p id="demo">A Paragraph.</p>

        <button type="button" onClick={myFunction}>Try it</button>
        <button onClick={() => console.log("Button clicked!")}>Click me!</button>

        <button onClick={handleClick}>  dot </button> 

        <div className='counter'>
        <h1>Counter</h1>
        <p>0</p>
        <button className='incr'>incr</button>
        <button className='decr'>decr</button>
        </div>

        <p id="demo">A Paragraph</p>

{/* <button type="button" onclick={parachange}>Try it</button> */}
{/* <p>{freek}</p> */}


<div class="form-check ms-4">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" ></input>
      <label class="form-check-label " for="flexRadioDefault1">
        Cash Credit
      </label>
    </div>







    </div>



  );
}

export default Send;
