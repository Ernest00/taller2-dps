import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  const [tipo, setTipo] = useState("C");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(tipo ==="C"){
      setCelsius((total*1));
      setFahrenheit((total * 9/5) +32);
      setKelvin( (total*1) + 273.15);
    }
    else if(tipo ==="K"){
      setCelsius((total) - 273.15);
      setFahrenheit((total-273.15)*(9/5) +32);
      setKelvin((total*1));
    }
    else if(tipo ==="F"){
      setCelsius(((total-32) * (5/9)));
      setFahrenheit((total*1));
      setKelvin((total-32)*(5/9)+ 273.15);
    }
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de temperatura</h1>

      <p>Celsius: {celsius.toFixed(3)} °C</p>
      <p>Fahrenheit: {fahrenheit.toFixed(3)} °F</p>
      <p>Kelvin: {kelvin.toFixed(3)} °K</p>

      <hr />

      <h3>Ha ingresado {total} °{tipo}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo.toString()}>
        <option value={"C"}>Celsius</option>
        <option value={"F"}>Fahrenheit</option>
        <option value={"K"}>Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
