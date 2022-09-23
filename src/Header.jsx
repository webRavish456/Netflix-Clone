import React, { useState }  from 'react';
import "./Home.scss";
import log from "./log.png";
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im';
import MenuIcon from '@mui/icons-material/Menu';

function Header()  {
 
  const [showMediaIcons,setShowMediaIcons] = useState(true);
 
   
  return (
    <nav className="main-nav">
     
     <img className='logo' src={log} alt='logo' />
    
       <div className={showMediaIcons ? " menu-link mobile-menu-link" :  "menu-link"} >
       <ul>
        <li>
        <Link  to="/" onClick={()=>setShowMediaIcons(!showMediaIcons)}>Home</Link>
        </li>
        <li>
        <Link to="/" onClick={()=>setShowMediaIcons(!showMediaIcons)}>TV Shows</Link>
        </li>
        <li>
        <Link to="/" onClick={()=>setShowMediaIcons(!showMediaIcons)}>Movies</Link>
        </li>
        <li>
        <Link to="/" onClick={()=>setShowMediaIcons(!showMediaIcons)}>My List</Link> 
        </li>
       </ul>
       </div> 
       <div className='search'>
       
       <div className='hamburger-menu'>
               <Link to='/' onClick={()=>setShowMediaIcons(!showMediaIcons)}>
               <MenuIcon fontSize="larger"/>
               </Link>
             </div>
             <ImSearch className='search-desktop'/>
       </div>
    
    </nav>
  
  )
}

export default Header;
