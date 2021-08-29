import React, { createContext } from 'react'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
}

const ThemeContext = createContext(themes.dark)
ThemeContext.displayName = 'ThemeContext'

export {
  themes,
  ThemeContext
} 