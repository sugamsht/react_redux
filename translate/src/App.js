import { useState } from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

function App() {

  const [language, setLanguage] = useState("English");

  return (
    <div className="w-screen h-screen ">
      <div className="px-5 pt-5 flex items-center gap-2">
        <h1>Select a Language:</h1>
        <img src="https://img.freepik.com/free-vector/official-national-flag-united-states-america_147754-319.jpg?w=2000" alt="USA"
          className={`w-10 h-10 p-2 border-2 ${language === "English" ? "border-red-500" : "border-black"}`}
          onClick={() => setLanguage('English')} />
        <img src="https://cdn.countryflags.com/thumbs/nepal/flag-400.png" alt="nepal"
          className={`w-10 h-10 p-2 border-2 ${language === "Nepali" ? "border-red-500" : "border-black"}`}
          onClick={() => setLanguage('Nepali')} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
