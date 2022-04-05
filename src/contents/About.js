import { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Sohail <mark className="mark2">Ahmad</mark>
        </h2>
        <p>Frontend Developer</p>
        <br></br>
        <p className="p10">
          I started developing interest in the world of computers from a young age,
          now I’m 20 years old, pursuing Information Science and
          Engineering at NIE Mysuru. Web development is my center of
          interest, i always love the idea of building poweful web applications, which web
          technology like ReactJS enables me to do.
        </p>
        <div className="Edu">
          <div class="back1 back2">
            <i class="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Education</h3>
        <div className="vr_line">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn2"></div>
        </div>
        <h4>B.E in ISE</h4>
        <p className="p1">NIE, Mysuru</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i> 2020 - 2024
        </p>
        <h4>High School</h4>
        <p className="p1">Allen, Resonance Kota</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i> May 2019
        </p>
        <h4>School</h4>
        <p className="p1">D.P.S, Gopalganj</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i> May 2017
        </p>

        <h3 class="sk_head">Skills</h3>
        <div class="sk">HTML5</div>
        <div class="sk s2">CSS3</div>
        <div class="sk s3">JavaScript</div>
        <div class="sk s4">Bootstrap</div>
        <div class="sk s5">ReactJS</div>
        <div class="sk s6">VueJS</div>
      </div>
    );
  }
}
export default About

