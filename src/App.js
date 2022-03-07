import dice from './images/icon-dice.svg';
import { useEffect, useState } from 'react';

const api = "https://api.adviceslip.com/advice";

const App = () => {

  const [advice, setAdvice] = useState(null)
  const [adviceCount, setAdviceCount] = useState(0)

  const fetchAdvice = async () => {
    try {
      let response = await fetch(api)
      let data =  await response.json()
      setAdvice(data.slip.advice)
      setAdviceCount(prevCount => prevCount + 1)
    } 
    catch (err) {
      throw new Error(err.message)
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  const handleClick = () => {
    fetchAdvice()
  }

  return (
    <main className="main">

      <h1>ADVICE #{adviceCount}</h1>

      <p>"{advice && advice}"
      </p>

      <div className="divider"></div>

      <div className="dice" onClick={handleClick}>
        <img src={dice} alt="dice" />
      </div>

    </main>
  );
}

export default App;
