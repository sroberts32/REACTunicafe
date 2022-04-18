import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}
  return (
    <div>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>All: {props.all}</p>
    <p>Average: {props.average}</p>
    <p>Positive: {props.positive}%</p>
  </div>
  )
}
const App = () => {
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Give Feedback</h1>
          <button onClick={() => setGood(good += 1)}>
            Good
          </button>
          <button onClick={() => setNeutral(neutral += 1)}>
            Neutral
          </button>
          <button onClick={() => setBad(bad += 1)}>
            Bad
          </button>
        <h1>Statistics</h1>
        <Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          all = {good + neutral + bad} 
          average = {(good - bad)/(good + neutral + bad)}
          positive = {Math.round((good)/(good + neutral + bad)*100)}
          />
    </div>
  )
}
export default App;
