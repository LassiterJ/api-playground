import React, {useState, Suspense} from 'react';
import PropTypes from 'prop-types'
import FetchApiContainer from '../../services/api/FetchApiContainer';
import AxiosApiContainer from '../../services/api/AxiosApiContainer';
import SuspenseApiContainer from '../../services/api/SuspenseApiContainer';
function Fallback() {
  console.log("Suspense triggered fallback")
  // debug it here to your heart's content
  // same thing with "OtherComponent", debug it in component
  return <div>Loading...</div>;
}
const JokeDeliveryInterface = () => {
  const [concreteMethod, setConcreteMethod] = useState("fetch")
  const apiOptions = {
    "fetch": <FetchApiContainer />,
    "axios": <AxiosApiContainer />,
    "suspense": (<Suspense fallback={<Fallback />}>
                  <SuspenseApiContainer />
                </Suspense>)
  };
  const SelectedMethod = () => apiOptions[concreteMethod];
  return (
    <>
      <button onClick={() => setConcreteMethod("fetch")}>Fetch</button>
      <button onClick={() => setConcreteMethod("axios")}>Axios</button>
      <button onClick={() => setConcreteMethod("suspense")}>Suspense</button>
     <SelectedMethod />
    </>
  );
};

JokeDeliveryInterface.defaultProps = {};

JokeDeliveryInterface.propTypes = {};

export default JokeDeliveryInterface;



