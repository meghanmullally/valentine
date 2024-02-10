import React, { useState } from 'react';
import './App.css';


const phrase = [
  "No",
  "Are you sure?",
  "Really sure?",
  "BABEEEEE please",
  "Why you playingggg...",
  <img
  key="angry-milk-gif"
  alt="Angry Milk GIF"
  src="https://media1.tenor.com/m/GGPvcEgpkVcAAAAC/angry-milk.gif"
/>,
  "I'm going to cryyyyy",
  "BABOOOOYAAAAA :'("
];

function App() {

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesBtnSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoBtnText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear laying on top of other bear"
            src="https://media1.tenor.com/m/IL2M9tD6fX4AAAAC/kristigocouple2024.gif"
          />
        <div className='text'>YAYYY!!!! I LOVE YOU </div>
        </>
      ) : (
        <>
          <img
            alt="bears hugging"
            src="https://media1.tenor.com/m/bIKZOe9_oigAAAAC/milk-mocha.gif"
          />
          <div className='text'>Will you be my valentine?</div>
          <div>
            <button
              className='yesBtn'
              style={{ fontSize: yesBtnSize}}
              onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className='noBtn'>
                {getNoBtnText()}
              </button>
          </div>
        </>

      )}
    </div>
  );
}

export default App;
