import { useState } from 'react';

import Form from './components/Form';
import Response from './components/Response';

import './App.css';

function App() {
  const [isRated, setIsRated] = useState();

  const ratingHandler = (value) => {
    setIsRated(value);
  };

  return (
    <main>
      {!isRated && <Form onRating={ratingHandler} />}
      {isRated && <Response rating={isRated} />}
    </main>
  );
}

export default App;
