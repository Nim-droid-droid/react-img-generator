// All the Contexts are created here
// This is where all the logic for Context(s) goes (ThemeProvider func)
// Function that will export the context(s) so it can be used everywhere in the prj
// {children} obj is all the cmpntns passed from App() to the ThemeProvider (ThemeProvider can be called anything, is acting in place of the context provider instead of cmpntName.Provider)
// val (state) is provided to Contexts (inside return() ) via the Context's value={} prop - the context can now Provide this val to all its children

import React, {useState, useContext} from "react";

// 1. Create Context(s)
const ThemeContext = React.createContext();
const ThemeContextUpdater = React.createContext();

// 2. Create function that will export the context(s)
export function useTheme(){
  return useContext(ThemeContext)
}

export function useThemeUpdater(){
  return useContext(ThemeContextUpdater)
}


// 3. Create function that will act as the Provider for the context(s)
export function ThemeProvider({children}){
// create val/state for (ThemeContext) Context
  const [darkTheme, setDarkTheme] = useState(true);

// create val/state for (ThemeContextUpdater) Context
  function toggleTheme(){
    setDarkTheme(preVal => !preVal)
    console.log("clicked")
  }

// Add the styling for theme here so i dnt have to create it within each cmpnt that uses it
// HOW to pass this to children? use style={} prop?
  // const themeStyle = {
  //   backgroundColor: darkTheme ? '#333' : '#CCC',
  //   color: darkTheme ? '#333' : '#CCC',
  //   padding: '2rem',
  //   margin: '2rem',
  //   fontSize: "20px",
  // }

  // useEffect display msg each time user clicks on btn to trigger update

  return(
    // 4. Give the Context(s) vals via their value={} prop & Provide them to their children
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdater.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdater.Provider>
    </ThemeContext.Provider>
  )
}