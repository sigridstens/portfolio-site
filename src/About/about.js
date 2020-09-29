import React from 'react';
import './about.css';
import {Link} from "react-router-dom";


function About() {
    return(
        <main className="col-container about">
            <figure className="col col-one">
                <img src={process.env.PUBLIC_URL + '/images/sigrid.jpg'} className="biopic" alt="Sigrid's profile" />
            </figure>

            <section className="col col-two">
                <h2>Hi there! I'm Sigrid Stensvold, a Minneapolis-based designer, illustrator, and web developer.</h2>

                <div>
                    <p>I am a designer and developer who specializes in creating lively designs, whimsical illustrations, and interactive web experiences. </p>

                    <p>When I am not working on freelance work or school projects, you might find me attempting to garden, plotting my next long distance bike tour, or cooking up something spontaneous in my kitchen.</p>

                  <p>Looking for a fresh perspective on an upcoming project? <Link to="/contact">Let's connect!</Link></p>
                </div>
            </section>
        </main>

)
}





export default About;