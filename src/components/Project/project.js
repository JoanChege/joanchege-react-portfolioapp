import React from 'react';
import './project.css';

const Project = () => {
  return (
    <div>
      <section class="section" id="projects">
                <div class="top-header">
                    <h1>Projects</h1>
                </div>
                <div class="project-container">
                  <div class="project-box">
                      <i class="uil uil-briefcase-alt"></i>
                      <h3>Completed 4 School Projects</h3>
                            <div class="skills-list">
                                <span>Ecommerce website</span>
                                <span>Food website</span>
                                <span>Tour guide website</span>
                                <span>Companion Chatbot</span>
                         </div>
                  </div>
                  <div class="project-box">
                      <i class="uil uil-award"></i>
                      <h3>Experience</h3>
                      <label>4 years of school work Experience</label>
                  </div>
                </div>
             </section>
    </div>
  )
}

export default Project;
