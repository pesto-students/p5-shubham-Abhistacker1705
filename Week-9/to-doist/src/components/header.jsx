import React from 'react';
import headstyle from './Header.module.css'

const header = ()=>{
    
    return (
        <div className={headstyle.body}>
            <nav className={headstyle.navbar}>

           <a href='index.html'><img className={headstyle.mainlogo} src= {require ("../images/Logo-dark.png")} alt="cannot display"/>
           <h1 className={headstyle.name}>Daily-Do</h1>
           </a>
           </nav>

        </div>

    )
}

export default header;