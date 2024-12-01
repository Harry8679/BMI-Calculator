import React from 'react'

const BMI = () => {
  return (
    <div className='calculator'>
      <h3>Body Mass Index Calculator</h3>
      <div className="bmi-result-container">
        <div className='bmi-result'>
          <div className='bmi-result-number'>
            Body Mass Index (BMI) = 23
          </div>
          <div className={`bmi-category`}>
            Underwright
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMI;
