import { Fragment, useState } from 'react';

import Form from './components/Form';
import Response from './components/Response';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [isRated, setIsRated] = useState();

  const ratingHandler = (value) => {
    setIsRated(value);
  };

  return (
    <Fragment>
    <main>
      {!isRated && <Form onRating={ratingHandler} />}
      {isRated && <Response rating={isRated} />}
    </main>
    <Footer />
    </Fragment>
  );
}

export default App;
