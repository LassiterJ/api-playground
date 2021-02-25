import React, {useState} from 'react';
import styles from './JokeDisplay.module.scss';

const JokeDisplay = ({ data }) => {
  const [hideAnswer, setHideAnswer] = useState(true);
  const { type, delivery, setup, joke } = data;
  if (type === 'single') {
    return <p>{joke}</p>;
  }
  return (
    <div>
      <p>{setup}</p>
      <div>
        {hideAnswer ? <button onClick={() => setHideAnswer(false)}> Show Answer</button> : <p>{delivery}</p>}
      </div>

    </div>
  );
};

export default JokeDisplay;
