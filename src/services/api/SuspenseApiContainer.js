import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
// import JokeDisplay from '../../components/joke-display/JokeDisplay';


const OtherComponent = React.lazy(() => import('./TestComponent'));
const baseUrl = 'https://v2.jokeapi.dev';
const SuspenseApiContainer = () => {
  // const[data, setData] = useState({joke: null, isFetching: false});
  // const [hideAnswer, setHideAnswer] = useState(true);
  // useEffect(() =>{
  //   const fetchJoke = async () => {
  //     try {
  //       setData({joke: null, isFetching: true});
  //       const response = await axios.get(`${baseUrl}/joke/Any`);
  //       setData({joke: response.data, isFetching: false});
  //     } catch (e) {
  //       console.error(e);
  //       setData({joke: null, isFetching: false});
  //     }
  //   };
  //   fetchJoke();
  // },[]);
  //
  // // if (data.joke.type === 'single') {
  // //   return <p>{data.joke.joke}</p>;
  // // }
  // return (
  //   <div>
  //     <p>{data.joke.setup}</p>
  //     <div>
  //       {hideAnswer ? <button onClick={() => setHideAnswer(false)}> Show Answer</button> : <p>{data.joke.delivery}</p>}
  //     </div>
  //   </div>
  // );
  return( <Suspense fallback={<p>loading...</p>}>
            <OtherComponent/>
          </Suspense>)
};

SuspenseApiContainer.defaultProps = {};

SuspenseApiContainer.propTypes = {};

export default SuspenseApiContainer;



