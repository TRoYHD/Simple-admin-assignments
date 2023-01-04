import React , {useState} from 'react'
import {Button} from "react-bootstrap"
export default function NavBar(){

 const [loading , setLoading]= useState(false)
    return ( 
        <nav>
        {/* <img src="../images/react-icon-small.png" className="nav--icon" /> */}
        <h1 className="nav--logo_text">React Auth</h1>
        <Button disabled={loading}className= "w-10" type="submit"> 
            Login
            </Button>
    </nav>
)
}
