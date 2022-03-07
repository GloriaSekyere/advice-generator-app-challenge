import mobileDivider from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';
import { useEffect, useState, useCallback } from 'react';

const api = "https://api.adviceslip.com/advice";

const App = () => {

  const [advice, setAdvice] = useState(null)
  const [adviceCount, setAdviceCount] = useState(1)

  const fetchAdvice = async () => {
    try {
      let response = await fetch(api)
      let data =  await response.json()
      setAdvice(data.slip.advice)
    } catch (err) {
        throw new Error(err.message)
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  const handleClick = () => {
    fetchAdvice()
    setAdviceCount(prevCount => prevCount + 1)
  }

  return (
    <main className="main">

      <h1>ADVICE #{adviceCount}</h1>

      <p>"{advice && advice}"
      </p>

      <div className="mobile-divider">
        <img src={mobileDivider} alt="dice" />
      </div>

      <div className="dice" onClick={handleClick}>
        <img src={dice} alt="dice" />
      </div>

    </main>
  );
}

export default App;
