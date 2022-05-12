import Header from './Header';
import './App.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import CurrentProjects from './CurrentProjects';
import Footer from './Footer';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          name: "Project Showcase",
          image: './img/projects-coffee-1.jpeg',
          description: "build UI and UX for Project Showcase website using HTML, CSS, Javascript as an assignment",
          finishedDate: "03/15/2022"
        },
        {
          id: 1,
          name: "Project DASH",
          image: './img/projects-coffee-2.jpeg',
          description: "build UI and UX for Project Showcase website using HTML, CSS, Javascript as an assignment",
          finishedDate: "03/27/2022"
        },
        {
          id: 2,
          name: "Search engine for Wikipedia",
          image: './img/projects-coffee-3.jpeg',
          description: "Build simple search engine on web browser helping easier to find information at Wikipedia wevsite",
          finishedDate: "03/27/2022"
        }
      ],
      skills: [
        {
          id: 0,
          name: "html",
          rate: "70%"
        },
        {
          id: 1,
          name: "css",
          rate: "80%"
        },
        {
          id: 2,
          name: "javascript",
          rate: "90%"
        },
        {
          id: 3,
          name: "reactjs",
          rate: "100%"
        },
        {
          id: 4,
          name: "nodejs",
          rate: "100%"
        },
        {
          id: 5,
          name: "English proficiency",
          rate: "80%"
        }
      ]
    }
  }
  render(){
    return (
      <div className="App"> 
        <Header />
        <AboutMe skillData = {this.state.skills}/>
        <Projects projectData = {this.state.projects}/>
        <CurrentProjects />
        <Footer />
      </div>
    );
  }
 
}

