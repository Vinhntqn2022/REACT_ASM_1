import React, { Component } from "react";
class CurrentProjects extends Component {
    state = {  } 
    render() { 
        return (
            <section id="current-project" className="py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 py-5 about-text text-center align-self-center">
                            <h2 className="text-uppercase">current projects</h2>
                            <p className="lead text-light">Aside pictures are some projects that i am taking part in this time, hoping this obtaining your attention </p>
                        </div>
                        <div className="col-md-6 current-project-photo my-5">
                            <div class="card current-project current-project-5">
                            <img style={{height: "200px"}} src={require('./img/projects-tea-1.jpeg')} alt="" className="card-img-top" />
                            <h1 class="my-2 text-capitalize">Search engine for Wikipedia</h1>
                            <p class="lead text-muted"> Build simple search engine on web browser helping easier to find information at Wikipedia wevsite</p>
                            <hr class="mb-0"/>
                            <div class="card-footer d-flex justify-content-between px-0">
                            <h4>04/27/2022</h4>
                            </div>
                            </div>
                            <img src={require('./img/projects-coffee-1.jpeg' )} alt="" className="current-project current-project-1 img-thumbnail"></img>
                            <img src={require('./img/projects-coffee-2.jpeg')} alt="" className="current-project current-project-2 img-thumbnail"></img>
                            <img src={require('./img/projects-tea-1.jpeg')}alt="" className="current-project current-project-3 img-thumbnail"></img>
                            <img src={require('./img/projects-tea-2.jpeg')} alt="" className="current-project current-project-4 img-thumbnail"></img>
                        </div>
                    </div>
                </div>
             </section>
     );
    }
}
 
export default CurrentProjects;