import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#000',
  },
  dark: {
    foreground: '#ffffff',
    background: '#fff',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})