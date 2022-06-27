import { useState } from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

function App() {

  const [language, setLanguage] = useState("English");

  const onLanguageChange = (language) => {
    setLanguage(language);
  }

  return (
    <div className="w-screen h-screen ">
      <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
