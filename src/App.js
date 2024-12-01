import './App.css';
import BmiCalculator from './components/BMI';

function App() {
  return (
    <div className="App">
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-lg-offset'>
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
