// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updatedTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updatedTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const Minutes = Math.floor(timeElapsedInSeconds / 60)
    if (Minutes < 10) {
      return `0${Minutes}`
    }
    return Minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div>
        <div>
          <h1>Stopwatch</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{time}</h1>
          <div>
            <button
              type="button"
              onClick={this.onStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button type="button" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
