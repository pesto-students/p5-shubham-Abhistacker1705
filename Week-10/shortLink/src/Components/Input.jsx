import React , { useState } from 'react'
import LinkDisplay from './LinkDisplay';
import './Input.css'


const Input = () => {
  const [value,setValue] = useState("");
  const [shortenedLink,setShortenedLink] = useState("")
  const [loading,setLoading] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const [display,setDisplay] =useState(false);


const fetchData = () =>{
  fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
  .then((res)=>res.json())
  .then((data)=>{setShortenedLink(data.result.full_short_link)})
  setLoading(false);
  setLoaded(true);
  setDisplay(true);
}



  return (
    <div id='input-container' className='container-fluid d-flex flex-column justify-content-center align-item-center'>
        <h1><span className='Heading-Shortlink'>ShortLink - </span>URL <span className='Shortner-word'>Shortner</span></h1>
        <input 
        type="text"
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        className='form-control w-50'
        name="LinkInput"
        placeholder='Enter the link to short it'
        id="LinkInput" />
        <button onClick={()=>
        {if(!loaded){
          setDisplay(false);
          setLoading(true);
          setTimeout(()=>
          {
            fetchData();
          },1000)
          setTimeout(()=>{
            setLoaded(false);
          },3000)
        }else return;
        }} 
        className='btn btn-primary button-op'>Short Link</button>

        <>{loading &&<button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
          </button>
          }
          </>

       <>{display &&   
        <LinkDisplay shortLink={shortenedLink} />
 }
         </>
    </div>
  )
}

export default Input