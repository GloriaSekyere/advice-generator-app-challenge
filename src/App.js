import mobileDivider from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';


const App = () => {
  return (
    <main className="main">
      <h1>ADVICE #117</h1>
      <p>"It is easy to sit up and take notice,
        what's difficult is getting up and taking
        action."
      </p>
      <div className="mobile-divider">
        <img src={mobileDivider} alt="dice" />
      </div>
      <div className="dice">
        <img src={dice} alt="dice" />
      </div>
    </main>
  );
}

export default App;
