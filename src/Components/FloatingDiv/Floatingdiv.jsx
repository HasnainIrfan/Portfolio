import React from 'react'
import './Floatingdiv.css'
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Floatingdiv = ({image  , text1 , text2}) => {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span style={{
        color: darkMode? 'black' : ''
      }}>
            {text1}
            <br/>
            {text2}
        </span>
    </div>
  )
}

export default Floatingdiv