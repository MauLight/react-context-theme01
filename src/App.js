import { useState } from 'react';
import './App.css';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  };

  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
      <ClassContextComponent />
    </ThemeContext.Provider>
    </>
  );
}

export default App;
