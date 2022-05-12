import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
    render() { 
        return (
            <section id="project" className="py-5">
                <div className="container">
                    <div className="row title mb-5">
                        <div className="col text-center">
                            <h1 className="text-uppercase">projects</h1>
                            <h3 className="text-capitalize">Practical skills</h3>
                            <a href={'url'} className="mb-0"><i className="fas fa-camera"></i></a>
                            <div className="title-underline"></div>
                        </div>
                    </div>
                    <div className="row grid projects">
                        {this.props.projectData.map(p => (
                            <Project project ={p}/>
                        ))}
                       
                       
                        
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Projects;