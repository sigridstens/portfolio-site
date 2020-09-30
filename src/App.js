import React from 'react';
import './App.css';
import Header from './Header/header.js';
import Home from './Home/home.js';
import About from './About/about.js';
import Contact from './Contact/contact';
import Portfolio from './Portfolio/portfolio.js';
import Resume from './Resume/resume.js';
import Footer from './Footer/footer.js';
import {Route, useLocation} from 'react-router-dom';
import ProjectPage from "./ProjectPage/project-page";


function App() {
  const location = useLocation();
  console.log(location.pathname);

  let htmlElement = document.getElementsByTagName("html")

  if (location.pathname == "/about" || location.pathname == "/contact") {
    htmlElement[0].classList.remove("light-theme");
    htmlElement[0].classList.add("dark-theme");
  } else {
    htmlElement[0].classList.remove("dark-theme");
    htmlElement[0].classList.add("light-theme");
  }

  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project-page/:id" component={ProjectPage} />
        <Footer />
    </div>
  );
}

export default App;
