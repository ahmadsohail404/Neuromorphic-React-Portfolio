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
              I started my journey in the world of computers from a young age,
              now I’m 19 years old, Pursuing my Information Science and
              Engineering Degree at NIE Mysuru. Web development is my center of
              interest, i always love the idea of cross-platform development,
              1-n one code base deploy into almost any platform, which web
              technology like Javascript enables me to do. I also like creating
              Interactive UI components for better UX and share those design and
              codes to the world through Github. I'm learning Data Structures
              and Algorithms in C++.
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
            <h4>B.Tech in ISE</h4>
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
            <div class="sk">HTML</div>
            <div class="sk s2">CSS</div>
            <div class="sk s3">JavaScript</div>
            <div class="sk s4">React</div>
            <div class="sk s5">DSA</div>
            <div class="sk s6">C++</div>
          </div>
        );
        }
    }
export default About
    
