import React from 'react';
import './contact.css';


function Contact() {
    return(
        <main className="col-container">
            <section className="col col-one">
                <h2>Want to get in touch?</h2>

                <div className="text-blurb">
                    <h3>Send me an email...</h3>
                    <a href="mailto:sigridstensvold@gmail.com" target="blank">sigridstensvold@gmail.com</a>
                </div>

                <div className="text-blurb">
                    <h3>...Or find me on these platforms:</h3>
                    <p>Instagram: <a href="#" >@sigridstensvold</a></p>
                    <p>Github: <a href="#" >@sigridstens</a></p>
                    <p>LinkedIn: <a href="#" >Sigrid Stensvold</a></p>

                </div>
            </section>

            <figure className="col col-two">
                <img src={process.env.PUBLIC_URL + '/images/desk-vista.jpg'} className="biopic" alt="A view from my desk" />
            </figure>
        </main>
    )
}

export default Contact;