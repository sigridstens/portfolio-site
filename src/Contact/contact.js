import React from 'react';
import './contact.css';


function Contact() {
    return(
        <main className="contact col-container">
            <section className="col col-one">
                <h2>Want to get in touch?</h2>

                <div className="text-blurb">
                    <h3>Send me an email...</h3>
                    <a href="mailto:sigridstensvold@gmail.com" target="blank">sigridstensvold@gmail.com</a>
                </div>

                <div className="text-blurb">
                    <h3>...or find me on these platforms:</h3>
                  {/*<p>Instagram: <a href="https://www.instagram.com/sigridstensvolddesign/" >@sigridstensvolddesign</a></p>*/}
                    <p>Github: <a href="https://github.com/sigridstens" >@sigridstens</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/sigrid-stensvold-bb2ab5a0/" >Sigrid Stensvold</a></p>

                </div>
            </section>

            <figure className="col col-two">
                <img src={process.env.PUBLIC_URL + '/images/baby-sigrid.jpg'} className="biopic" alt="My inner artist" />
            </figure>
        </main>
    )
}

export default Contact;