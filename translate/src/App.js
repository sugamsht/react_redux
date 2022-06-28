import UserCreate from "./components/UserCreate";
import { LanguageStore } from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

function App() {

  return (
    <div className="w-screen h-screen ">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red-500">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
}

export default App;
