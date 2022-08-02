import React from 'react';
import './Toogle.css';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Toogle = () => {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;

  const handleClick = ()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toogle" onClick={handleClick}>
        <Sun/>
        <Moon/>
        <div className="t-button"
        style={ darkMode ? {left:'2px'} : {right:'2px'}}
        ></div>
    </div>
  )
}

export default Toogle