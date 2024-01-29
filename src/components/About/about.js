import React from 'react';
import './about.css'

const About = () => {
  return (
    <div>
      <section className='section' id='about' >
        <div className='top-header'>
            <h1>About Me</h1>
        </div>
        <div className='row'>
            <div className="col">
                <div className='about-info'>
                    <h3>My Introduction</h3>
                    <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                             frameworks such as ReactJS and its libraries,which allows me to implement interactive features.                        
                          </p>
                </div>
            </div>
            <div class="col">
                      <div class="skills-box">
                          <div class="skills-header">
                              <h3>Frontend</h3>
                          </div>
                          <div class="skills-list">
                              <span>HTML</span>
                              <span>CSS</span>
                              <span>JavaScript</span>
                          </div>
                      </div>
                      <div class="skills-box">
                          <div class="skills-header">
                              <h3>Backend</h3>
                          </div>
                          <div class="skills-list">
                              <span>PHP</span>
                              <span>JAVA</span>
                              <span>Python</span>
                              <span>NodeJS</span>
                          </div>
                      </div>
                      <div class="skills-box">
                          <div class="skills-header">
                              <h3>Database</h3>
                          </div>
                          <div class="skills-list">
                              <span>MySQL</span>
                              <span>MongoDB</span>
                          </div>
                      </div>
                      <div class="skills-box">
                        <div class="skills-header">
                            <h3>Frameworks</h3>
                        </div>
                        <div class="skills-list">
                            <span>ReactJS</span>
                            <span>FLASK</span>
                        </div>
                    </div>
                  </div>
        </div>
      </section>
    </div>
  )
}

export default About;
