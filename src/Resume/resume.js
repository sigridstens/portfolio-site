import React from 'react';
import './resume.css';


function Resume() {
    return(
        <main className="resume col-container">
            <section className="col col-threequarters">
                <section className="resume-section">
                    <h2>Education</h2>
                    <h3>M.A. Graphic and Web Design <span className="date">(graduating 2020)</span></h3>
                    <p>Minneapolis College of Art and Design — Minneapolis, MN</p>

                    <h3>B.S. Anthropology <span className="date">(2015)</span></h3>
                    <p>University of Wisconsin-Madison — Madison, WI </p>
                </section>

                <section className="resume-section">
                    <h2>Experience</h2>
                    <h3>Freelance Graphic Designer <span className="date">(12/2018 - present)</span></h3>
                    <h4>Self-Employed – Minneapolis, MN</h4>
                    <p>Freelance graphic designer specializing in graphic and web design. Client work ranges from logo design and brand identity development to web design, illustration and motion design.</p>

                    <h3>HTML/CSS Peer Tutor <span className="date">(12/2019 - present)</span></h3>
                    <h4>Minneapolis College of Art and Design – Minneapolis, MN</h4>
                    <p>Tutor assisting students in identifying issues within their code and helping them work toward solutions using best practices.</p>

                    <h3>Web Developer Intern <span className="date">(11/2019 - present)</span></h3>
                    <h4>J. Murphy & Associates – Minneapolis, MN</h4>
                    <p>Developed new company WordPress site from mock-ups. Created modal plugin that reuses content on staff page.</p>

                    <h3>Human Resources Coordinator <span className="date">(12/2017 - 4/2019)</span></h3>
                    <h4>East Side Neighborhood Services – Minneapolis, MN</h4>
                    <p>Performed administrative duties including benefit billing and enrollment, employee orientation, and personnel file management. Supervised front desk team.</p>

                    <h3>Volunteer Coordinator <span className="date">(8/2016 - 8/2017)</span></h3>
                    <h4>Office of Ceremonies, University of Washington – Seattle, WA</h4>
                    <p>Recruited, trained, and managed over 100 volunteers for Commencement and Freshman Convocation.</p>

                    <h3>Project Manager/Content Creator <span className="date">(9/2015 - 8/2016)</span></h3>
                    <h4>Five Agencies – Seattle, WA</h4>
                    <p>Launched, project managed, and edited online publication. Created graphics for social media, web, and print use. Wrote content for companies within agency.</p>
                </section>
            </section>

            <section className="col col-onequarter">
                <section className="resume-section">
                    <h2>Proficiencies</h2>
                    <ul>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>InDesign</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>Typography</li>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Design Layout</li>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>Mobile Design</li>
                        <li>Programming</li>
                        <li>Copywriting</li>
                        <li>Customer Service</li>
                    </ul>
                </section>

            </section>

        </main>
    )
}

export default Resume;