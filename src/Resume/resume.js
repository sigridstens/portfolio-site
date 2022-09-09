import React from 'react';
import './resume.css';


function Resume() {
    return(
        <main className="resume col-container">
            <section className="col col-threequarters">
                <section className="resume-section">
                    <h2>Education</h2>
                    <h3>M.A. Graphic and Web Design <span className="date">(2020)</span></h3>
                    <h4>Minneapolis College of Art and Design — Minneapolis, MN</h4>

                    <h3>B.S. Anthropology <span className="date">(2015)</span></h3>
                    <h4>University of Wisconsin-Madison — Madison, WI </h4>
                    <p>Honors in the Liberal Arts, Phi Beta Kappa, Graduated with Distinction</p>
                </section>

                <section className="resume-section">
                    <h2>Experience</h2>
                    <h3>Interactive Designer <span className="date">(4/2021 - present)</span></h3>
                    <h4>Intercross – Minneapolis, MN</h4>
                    <p>Work with a small agency team to nimbly produce marketing campaigns for fortune-500 clients. Design digital assets for clients, create animated gifs from storyboarding to production, develop email campaigns that adhere to email coding standards and WCAG AA accessibility requirements, utilize Figma and Sketch to design microsites.</p>

                    <h3>Freelance Graphic Designer <span className="date">(12/2018 - present)</span></h3>
                    <h4>Self-Employed – Minneapolis, MN</h4>
                    <p>Current and recent client work ranges from logo design and brand identity development to web design, illustration and motion design.</p>

                    <h3>Peer Tutor <span className="date">(12/2019 - present)</span></h3>
                    <h4>Minneapolis College of Art and Design – Minneapolis, MN</h4>
                    <p>Answer peer questions about HTML, CSS, Javascript, p5.js, p5.play, and Adobe After Effects. Assist students in identifying issues in their work and helping them find solutions.</p>

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
                    <p>Project manager for online publication, including initial launch, contributor management, and ongoing editing. Created graphics for social media, web, and print use. Wrote content for companies within agency.</p>
                </section>
            </section>

            <section className="col col-onequarter">
                <section className="resume-section">
                    <h2>Proficiencies</h2>
                    <ul>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe XD</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>p5.js</li>
                        <li>Email on Acid</li>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Design Layout</li>
                        <li>Typography</li>
                        <li>Graphic Design</li>
                        <li>Motion Design</li>
                        <li>Web Design</li>
                        <li>Mobile Design</li>
                        <li>Email Design and Coding</li>
                        <li>Front-end Web Development </li>
                        <li>Copy Writing</li>
                        <li>Customer Service</li>
                    </ul>
                </section>

            </section>

        </main>
    )
}

export default Resume;