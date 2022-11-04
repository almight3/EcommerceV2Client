import React from 'react';
import "./stepper.css"
function FormStepper({step}) {
  return (
    <>
    <div className='w-96 my-2 mx-auto'>
    <ul className="steps">
      <li className={step>=1 ? "step step-primary" :"step"}>Shiping</li>
      <li className={step>=2 ? "step step-primary" :"step"}>Conform Order</li>
      <li className={step>=3 ? "step step-primary" :"step"}>Payment</li>
    </ul>
    </div>
   </>
  )
}

export default FormStepper