import React from 'react';
import './footer.css';


function Footer() {
    return(
        <footer className="footer">
            <section className="social-icons">
              {/*<a href="https://www.instagram.com/sigridstensvold/">
                <i className="fab fa-instagram"></i>
              </a>*/}
              <a href="https://github.com/sigridstens">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sigrid-stensvold-bb2ab5a0/">
                <i className="fab fa-linkedin"></i>
              </a>
            </section>

            <p>All rights reserved, Sigrid Stensvold.</p>
        </footer>
    )
}

export default Footer;