import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import axios from "axios";
import JokeDisplay from '../../components/joke-display/JokeDisplay';

const baseUrl = 'https://v2.jokeapi.dev';

const AxiosApiContainer = () => {
  const[data, setData] = useState({joke: null, isFetching: false});

  useEffect(() =>{
    const fetchJoke = async () => {
      try {
        setData({joke: null, isFetching: true});
        const response = await axios.get(`${baseUrl}/joke/Any`);
        setData({joke: response.data, isFetching: false});
      } catch (e) {
        console.error(e);
        setData({joke: null, isFetching: false});
      }
    };
    fetchJoke();
  },[]);

  if(!data.joke || data.isFetching){
    return <p>"loading..."</p>
  }
  return (
   <JokeDisplay data={data.joke} />
  );
};

AxiosApiContainer.defaultProps = {};

AxiosApiContainer.propTypes = {};

export default AxiosApiContainer;



