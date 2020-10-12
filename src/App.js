import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Navbar,NavbarBrand} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Sarah Zaman',
      headerLinks: [
        {title: 'Home', path: '/my-portfolio'},
        {title: 'About', path: '/about'},
        {title: 'Experience', path: '/experience'},
        {title: 'Projects', path: '/projects'}
      ],
      home: {
        title: 'Hi, I\'m Sarah',
        subTile: 'I\'m '
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'My Projects'
      },
      experience: {
        title: 'Experience'
      }
    }
  }

  render(){
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <div className="wrapper">
              <Navbar className="" expand="lg">
                <NavbarBrand> <Link className="nav-link text-dark" to="/my-portfolio">Sarah Zaman</Link></NavbarBrand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/about">About Me</Link>
                    <Link className="nav-link" to="/experience">Experience</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <Route path="/my-portfolio" render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTile} text={this.state.home.text}/>}/>
              <Route path="/about" render={()=> <AboutPage title={this.state.about.title} />}/>
              <Route path="/experience" render={()=> <ExperiencePage title={this.state.experience.title} />}/>
              <Route path="/projects" render={()=> <ProjectPage title={this.state.projects.title} />}/>

            </div>


            <Footer />

          </Container>
        </Router>

    );
  }

}

export default App;
