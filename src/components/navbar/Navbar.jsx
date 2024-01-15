import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className='Navbar'>
            <h1>Weblly</h1>
            <div>
                <CiSearch />
                <input type="text" placeholder='Search Contact...' />
            </div>
            <button onClick={()=>{navigate("/addEmployees")}}>Employee</button>
        </nav>
    )
}

export default Navbar
