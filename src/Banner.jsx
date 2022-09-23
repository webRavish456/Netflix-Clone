import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from 'axios';
const apiKey = "aa0417c5aad55c458a1148013ffbd76b";
const trending="trending/all/day";
const  url = "https://api.themoviedb.org/3";
const Banner = () => {

    const [mov,setmovies]=useState([])

    useEffect(()=>

    {
         async function fetchData(){
            const request = await axios.get(`${url}/${trending}?api_key=${apiKey}`);
            setmovies(request.data.results [
                Math.floor(Math.random() * request.data.results.length)
            ]);

             return request;
         }
             fetchData();

    },[])

    function truncateDesc(str,n){
      return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

  return (
    <div className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original//${mov?.backdrop_path}")`,
        backgroundPosition:"center center",
        
    }}>
     <div className='banner_contents'>
    <h1 className='banner_titles'>{mov?.title || mov?.name || mov?.original_name}</h1>
     <div className='banner_buttons'>
    
     <button className='banner_button'> Watch Now</button>
   
        <button className='banner_button'> Add List</button>
        </div>
     <h1 className='banner_description'>{truncateDesc(mov?.overview,150)}</h1>
    </div>
    <div className='banner_fadeBottom'></div>
    </div>
  )
}

export default Banner;
