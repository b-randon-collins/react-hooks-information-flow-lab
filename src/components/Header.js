import React from 'react'

const Header = ({isDarkMode, onDarkModeClick}) => {



  return (
    <button onClick={onDarkModeClick}>
    {isDarkMode ? "Dark" : "Light"} Mode
  </button>
  )
}

export default Header