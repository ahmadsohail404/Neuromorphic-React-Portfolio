import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/ahmadsohail404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="mailto:sohailss2412@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-envelope"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://linkedin.com/in/ahmadsohail404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://instagram.com/ahmadsohail__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
