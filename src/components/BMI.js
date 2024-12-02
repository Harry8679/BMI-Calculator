import React, { useState } from 'react'
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  const [bmiValue, setBmiValue] = useState(0);
  return (
    <>
      <div className='calculator'>
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className='bmi-result'>
            <div className='bmi-result-number'>
              Body Mass Index (BMI) = {bmiValue}
            </div>
            <div className={`bmi-category`}>
              Underwright
            </div>
          </div>
        </div>
        <BmiCalculator getBmiValue={setBmiValue} />
      </div>
    </>
  )
}

export default BMI;
