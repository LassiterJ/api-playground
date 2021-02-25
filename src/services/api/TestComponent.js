import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = () => {
  const timeout = (str, callback) =>{
    setTimeout(()=> callback(str)
 , 5000
  )};
const testCallback = (str) => {console.log(str)}
  return (
    <div>
      {timeout("hello", testCallback)}
    </div>
  );
};

TestComponent.propTypes = {

};

export default TestComponent;