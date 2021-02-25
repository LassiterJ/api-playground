import React, {useEffect, useState} from 'react';
import JokeDisplay from "../../components/joke-display/JokeDisplay";

const baseUrl = 'https://v2.jokeapi.dev'

const FetchApiContainer = () => {
    const [data, setData] = useState({joke: null, isFetching: false});
    useEffect( () => {
        async function fetchJoke(){
          try {
            setData({ joke: null, isFetching: true });
            const response = await fetch(`${baseUrl}/joke/Any`);
            const jsonRes =  await response.json();
            setData({ joke: jsonRes , isFetching: false });
          } catch(e){
            console.error(e);
            setData({joke: null, isFetching: false});
        }
          }
        fetchJoke()
    },[]);

  if(!data.joke || data.isFetching){
    console.log("FetchData: ", data);
    return <p>"loading..."</p>
  }
    return (
        <JokeDisplay data={data.joke} />
    );

};

export default FetchApiContainer;
