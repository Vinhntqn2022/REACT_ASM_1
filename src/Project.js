import React, { Component } from "react";
class Project extends Component {

    render() { 
        return (
            <div class="col-md-6 col-lg-4 my-3">
                <div class="card">
                    <img style={{height: "200px"}} src={require(`${this.props.project.image}`)} alt="" className="card-img-top"/>
                    <h1 class="my-2 text-capitalize">{this.props.project.name}</h1>
                    <p class="lead text-muted">{this.props.project.description}</p>
                    <hr class="mb-0"/>
                    <div class="card-footer d-flex justify-content-between px-0">
                    <h4>{this.props.project.finishedDate}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Project;