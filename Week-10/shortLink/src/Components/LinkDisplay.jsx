import React from 'react'
import { useState,useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkDisplay = (props) => {
    
  const [copied,setCopied] = useState(false);
  
  
useEffect(()=>{
  if(!copied){
    setTimeout(()=>{
      const a = document.getElementById('Copybtn');
      a.innerHTML="Copy 📋"
      a.style.backgroundColor="rgb(33,37,41)";

    },3000);
  }

  if(copied){
      const a = document.getElementById('Copybtn');
      a.innerHTML="Copied 📋"
      a.style.backgroundColor="darkgrey"
    setCopied(false);
  }
},[copied])

  return (
    <div className='container-fluid d-flex flex-row w-50 link-display-container'>
        <input
        className='form-control'
        value={props.shortLink}
        type="url"
        name="shortlink"
        disabled
        id="shortlink" />

      <CopyToClipboard
      text={props.shortLink}
      onCopy={()=>setCopied(true)}
      >
        <button
                id='Copybtn'
                className='btn btn-dark copy-btn'
                >Copy📋
        </button>
      </CopyToClipboard>
      </div>
  );
  }

export default LinkDisplay;