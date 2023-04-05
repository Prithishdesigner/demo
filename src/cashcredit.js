import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Container, Image } from "react-bootstrap";
import bullet from "../src/images/bullet.jpg";

function DropdownEMI() {
  const [option, setOption] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [agreed, setAgreed] = useState(null);

  return (
    <div>
      <select onChange={(e) => setOption(e.target.value)}>
        <option>Select an option</option>
        <option value="option1">Manufacturing</option>
        <option value="option2">Trading</option>
        <option value="option3">Services</option>
        <option value="option4">Others</option>
      </select>

      {option === "option1" && (
        <div>
          <input
            type="text"
            maxLength={2}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            <p>agree</p>
            <label>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
              No
            </label>
          </div>

          {agreed === "yes" ? (
            <div>
              <button onClick={() => setResult(amount / 5)}>Calculate</button>
              <p>Result: {result.toFixed(2)}</p>
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
          <input
            type="text"
            maxLength={2}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            <p>agree</p>
            <label>
              <input
                type="radio"
                value="yes"
                checked={agreed === "yes"}
                onChange={() => setAgreed("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={agreed === "no"}
                onChange={() => setAgreed("no")}
              />
              No
            </label>
          </div>

          {agreed === "yes" ? (
            <div>
              <button onClick={() => setResult(amount / 6)}>Calculate</button>
              <p>Result: {result.toFixed(2)}</p>
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
       <input
         type="text"
         maxLength={2}
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
       />
       <div>
         <p>agree</p>
         <label>
           <input
             type="radio"
             value="yes"
             checked={agreed === "yes"}
             onChange={() => setAgreed("yes")}
           />
           Yes
         </label>
         <label>
           <input
             type="radio"
             value="no"
             checked={agreed === "no"}
             onChange={() => setAgreed("no")}
           />
           No
         </label>
       </div>

       {agreed === "yes" ? (
         <div>
           <button onClick={() => setResult(amount / 6)}>Calculate</button>
           <p>Result: {result.toFixed(2)}</p>
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
        <input
          type="text"
          maxLength={2}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <p>agree</p>
          <label>
            <input
              type="radio"
              value="yes"
              checked={agreed === "yes"}
              onChange={() => setAgreed("yes")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={agreed === "no"}
              onChange={() => setAgreed("no")}
            />
            No
          </label>
        </div>

        {agreed === "yes" ? (
          <div>
            <button onClick={() => setResult(amount / 6)}>Calculate</button>
            <p>Result: {result.toFixed(2)}</p>
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
  );
}

export default DropdownEMI;
