import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
// import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Sohail <mark>Ahmad</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "A Developer",
            "A Designer",
            "A Programmer",
          ]}
          speed={100}
          eraseDelay={700}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
