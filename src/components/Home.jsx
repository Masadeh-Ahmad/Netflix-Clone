import { useState, useEffect } from "react";
import MovieList from "./MovieList"

export default function Home(){
    const [movie, setMovie] = useState([]);
    
    async function getData(){
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();

        setMovie(data);
            
    };

    useEffect(() => {
        getData();

    },[]);
    return(
        <>
        <h1>From Home Page</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", height:"100px"}}>
        {movie && <MovieList movie={movie}/>}
        </div>
        </>
    )
};