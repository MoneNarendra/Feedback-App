import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {userAction: false}

  userFeedback = () => {
    this.setState({userAction: true})
  }

  render() {
    const {userAction} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let result
    if (userAction === false) {
      result = (
        <div className="feedback-inner-container">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li className="each-emoji-con" key={eachEmoji.id}>
                <button
                  type="button"
                  className="button"
                  onClick={this.userFeedback}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="images"
                  />
                  <p className="emoji-text">{eachEmoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      result = (
        <div className="thanks-greeting-container">
          <img src={loveEmojiUrl} alt="love emoji" className="images" />
          <h1 className="thanks-heading">Thank You</h1>
          <p className="thanks-discription">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }
    return <div className="bg-container">{result}</div>
  }
}

export default Feedback
