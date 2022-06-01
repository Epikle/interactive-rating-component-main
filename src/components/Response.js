import thanks from '../images/illustration-thank-you.svg';

const Response = (props) => (
  <div className="response">
    <img src={thanks} alt="Thank you!" />
    <span>You selected {props.rating} out of 5</span>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don’t hesitate to get in touch!
    </p>
  </div>
);

export default Response;
