import { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import LanguageButtons from './components/LanguageButtons';
import FontSizeButtons from './components/FontSizeButtons';

function App() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [fontSize, setFontSize] = useState(40);

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  const changeLanguage = (language) => { // change greeting based on selected language
    const greetings = { 
      English: "Good Morning",
      Chinese: "早上好",
      Spanish: "Buenos Días",
      Haitian: "Bonjou",
      Portuguese: "Bom Dia",
    };
    setGreeting(greetings[language]); // update greeting based on selected language 
  };

  // rendering 
  return (
    <div className="App">
      <FontSizeButtons increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize}/>
      <Greeting greeting={greeting} fontSize={fontSize}/>
      <LanguageButtons changeLanguage={changeLanguage}/>
    </div>
  );
}

export default App;
