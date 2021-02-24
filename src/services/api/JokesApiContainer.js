import React, {useEffect, useState} from 'react';
import JokeDisplay from "../../components/joke-display/JokeDisplay";

const baseUrl = 'https://v2.jokeapi.dev'
const JokesApiContainer = () => {
    const [data, setData] = useState(false);
    useEffect( () => {
        async function fetchData(){
       const response = await fetch(`${baseUrl}/joke/Any`)
            return await response.json()
        }
        fetchData().then((data) => setData(data))
    },[]);
    if(data.error === true){
        console.error( `Error: ${data.error}`)
    }
    if(!data){
        return <p>"loading..."</p>
    }
    return (
        <JokeDisplay data={data} />
    );

};

export default JokesApiContainer;
