import {Component} from 'react'
import './index.css'
// Write your code here

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  clickingButton1 = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  clickingButton2 = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="showhide-container">
        <h1 className="showhide-heading">Show/hide</h1>
        <div className="buttons-cont">
          <div className="side-container">
            <button
              onClick={this.clickingButton1}
              type="button"
              className="first-button"
            >
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="firstname-container">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="side-container">
            <button
              onClick={this.clickingButton2}
              type="button"
              className="first-button"
            >
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="firstname-container">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
