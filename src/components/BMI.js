import React, { useState } from 'react'
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  const [bmiValue, setBmiValue] = useState(0);

  const getBmiClass = bmi => {
    if (bmi >= 1 && bmi <= 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 24.9 && bmi <= 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obese';
  }
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
