import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from 'axios';
import Banner from "./Banner";


const apiKey = "aa0417c5aad55c458a1148013ffbd76b";
const  url = "https://api.themoviedb.org/3";
const trending="trending/all/day";
const upcoming="upcoming";
const imgurl = "https://image.tmdb.org/t/p/w500";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const tv= "tv/popular";

const Card=({img})=>
(
    <img className="card" src={img} alt="cover" />
)
const Row=({title,
     arr=[
             {
                
             }
]  } )=>(
    <div className='row'>

      <h2>{title}</h2>
     <div>
      {
        arr.map((item)=>(
       
         
            <Card key={item.id} img={`${imgurl}/${item.poster_path}`}/>
         
         
            
      
        ))
      }

     </div>
    </div>
)




const Home = () => {
  const [trend,settrend]=useState([]);
  const [upcome, setupcoming] =useState([]);
  const [now, setnow] =useState([]);
  const [top, settop] =useState([]);
  const [act, setact]=useState([]);
  const [tvshow, settvshow]=useState([]);
  const [horr, sethorr]=useState([]);
  const [rom, setrom]=useState([]);
  const [ad, setad]=useState([]);
  const [animate, setanimate]=useState([]);
  const [crim, setcrim]=useState([]);
  const [com, setcom]=useState([]);
  const [doc, setdoc]=useState([]);

useEffect(()=> {
  const fetchtrend = async()=>{
    const {data: {results}} = await axios.get(`${url}/${trending}?api_key=${apiKey}`);
   
    settrend(results);
};

    const fetchUpcoming = async()=>{
         const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
       
         setupcoming(results);
    };
    const fetchnowPlaying = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      
      setnow(results);
 };
const fetchtoprated = async()=>{
  const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=2`);
 
  settop(results);
};
const fetchaction = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=28");
 
  setact(results);
};

const fetchtv = async()=>{
  const {data: {results}} = await axios.get(`${url}/${tv}?api_key=${apiKey}`);
 
  settvshow(results);
};
const fetchromance = async()=>{
  const {data:{results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=27");

  setrom(results);
};
const fetchhorror = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=10749");
 
  sethorr(results);
};
const fetchadventure = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=12");
 
  setad(results);
};
const fetchcomedy = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=35");
  
  setcom(results);
};
const fetchanimation = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=16");
  
  setanimate(results);
};
const fetchcrime = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=80");
 
  setcrim(results);
};
const fetchdocumentry = async()=>{
  const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=aa0417c5aad55c458a1148013ffbd76b&with_genres=99");
  
  setdoc(results);
};
  
   fetchaction();
    fetchtv();
    fetchtrend();
    fetchUpcoming();
    fetchnowPlaying();
    fetchtoprated();
    fetchdocumentry();
    fetchcrime();
    fetchanimation();
    fetchcomedy();
    fetchadventure();
    fetchhorror();
    fetchromance();

},[])

  return (
   <>
   <section className="home">
     <Banner/>
    
    <div className='title'>
    <Row title={"Netflix Originals"} arr={trend}/>
    <Row title={"Trending Now"} arr={upcome}/>
    <Row title={"Now Releases"} arr={now}/>
    <Row title={"Blockbuster Movies"} arr={top}/>
    <Row title={"Action Movies"} arr={act}/>
    <Row title={"Romance Movies"} arr={rom}/>
    <Row title={"Horror Movies"} arr={horr}/>
    <Row title={"Crime"} arr={crim}/>
    <Row title={"Animation"} arr={animate}/>
    <Row title={"TV Series"} arr={tvshow}/>
    <Row title={"Comedy"} arr={com}/>
    <Row title={"Adventure"} arr={ad}/>
    <Row title={"Documentries"} arr={doc}/>
</div>
   </section>

 

   </>
    
  )
}

export default Home;
