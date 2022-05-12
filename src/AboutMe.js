import React, {Component} from "react";
import Skill from "./Skill";

class AboutMe extends Component {
    render() { 
        return (
            <section className="pb-5">
                <div className="container">
                    <div className="row title mb-5">
                        <div className="col text-center">
                            <h1 className="text-uppercase">about me</h1>
                            <h3 className="text-capitalize">front-end developer</h3>
                            <a href={'url'} className="mb-0"><i className="far fa-check-square"></i></a>
                            <div className="title-underline"></div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 about-progress mb-5 d-flex flex-column justify-content-center">
                            <div className="progress-bars">
                              {this.props.skillData.map(s => (
                                <Skill data = {s}/>
                              ))}
                            
                            </div>
                         </div>
                        <div className="col-md-6 py-5 about-text text-center">
                            <h2 className="text-uppercase">always learning and pushing boundries</h2>
                            <div>
                                <h3 className="text-capitalize text-left ml-2">education</h3>
                                <p className="ml-5 lead text-left">Bachelor of electronic and telecommunication at Hanoi University of Technology</p>
                                <p className="ml-5 text-left"><i className="mx-2 fas fa-calendar"></i>September 2000 - June 2005</p>  
                                <p className="ml-5 text-left"><i className="mx-2 fas fa-location-arrow"></i>Hanoi, Vietnam</p> 
                                <p className="ml-5 text-left"><i className="mx-2 fas fa-graduation-cap"></i>GPA: 7.15</p>
                            </div>
                            <div>
                                <h3 className="text-capitalize text-left ml-2">certification</h3>
                                <p className="ml-5 lead text-left">Program of Reactjs developer at FPT software cacademy </p>
                                <p className="ml-5 text-left"><i className="mx-2 fas fa-calendar"></i>march 2022 - July 2022</p>  
                                <p className="ml-5 text-left"><i className="mx-2 fas fa-location-arrow"></i>Hochiminh City, Vietnam</p> 
                            </div>
                        </div>
                    </div>              
                </div>
            </section>
        );
    }
}
 
export default AboutMe;