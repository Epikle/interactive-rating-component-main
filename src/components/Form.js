import star from '../images/icon-star.svg';

const Form = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onRating(event.target.rating.value);
  };

  return (
    <div className="form">
      <img src={star} alt="Star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            <input type="radio" name="rating" value="1" id="r1" />
            <label htmlFor="r1" className='sr-only'>Rate 1</label>
          </li>
          <li>
            <input type="radio" name="rating" value="2" id="r2" />
            <label htmlFor="r2" className='sr-only'>Rate 2</label>
          </li>
          <li>
            <input type="radio" name="rating" value="3" id="r3" />
            <label htmlFor="r3" className='sr-only'>Rate 3</label>
          </li>
          <li>
            <input type="radio" name="rating" value="4" id="r4" />
            <label htmlFor="r4" className='sr-only'>Rate 4</label>
          </li>
          <li>
            <input type="radio" name="rating" value="5" id="r5" />
            <label htmlFor="r5" className='sr-only'>Rate 5</label>
          </li>
        </ul>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
