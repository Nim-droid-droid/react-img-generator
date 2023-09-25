import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import { ThemeProvider, useTheme, useThemeUpdater } from './context/ThemeContext'


export default function App() {
  // darkTheme var can be called anything. doesnt have to match the state name darkTheme
  const darkTheme = useTheme()

  //Grab & store toggleTheme func from ThemeContext into toggle_Theme var
  const toggle_theme = useThemeUpdater()

  // Add the styling for theme here so i dnt have to create it within each cmpnt that uses it
  const themeStyles = {}

  return(
    <>
    </>
  )
}