import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    let id = 5
    return(
        <header> 
                 <h1>Demo App</h1>   
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>  
                <Link to={"/edit/"+id}>Edit</Link>
        </header>
    )
}
export default Header;