import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./MenuBar.css";


const  MenuBar = () =>{
    return (
        <nav className="Nav"> 
            <Link className="Nav-child" to="/">Home</Link>
            <Link className="Nav-child" to="/recipes">Recipe</Link>
            <Link className="Nav-child" to="/login">Login</Link>
        </nav>
    );
}

export default MenuBar