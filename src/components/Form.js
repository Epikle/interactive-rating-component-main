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
            <input type="radio" name="rating" value="1" />
          </li>
          <li>
            <input type="radio" name="rating" value="2" />
          </li>
          <li>
            <input type="radio" name="rating" value="3" />
          </li>
          <li>
            <input type="radio" name="rating" value="4" />
          </li>
          <li>
            <input type="radio" name="rating" value="5" />
          </li>
        </ul>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
