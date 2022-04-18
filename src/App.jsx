import React, { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td> {props.value} </td>
    </tr>
  );
};

const Statistics = (props) => {
  let { good, bad, neutral } = props;

  if (good + bad + neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={good + neutral + bad} />
          <tr>
            <td>Average</td>
            <td> {(good - bad) / (good + bad + neutral)} </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td> {Math.round((good / (good + neutral + bad)) * 100)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return (
    <button onClick={props.handleclick} type="button">
      {props.name}
    </button>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback:</h1>
      <Button handleclick={() => setGood(good + 1)} name="Good" />
      <Button handleclick={() => setNeutral(neutral + 1)} name="Neutral" />
      <Button handleclick={() => setBad(bad + 1)} name="Bad" />
      <h2>Statistics:</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
