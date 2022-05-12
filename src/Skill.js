import React, { Component } from "react";

class Skill extends Component {
    
    render() { 
        return (
            <div className="bar my-3">
            <h5 className="text-light text-uppercase d-flex justify-content-between">{this.props.data.name}<span>{this.props.data.rate}</span></h5>
            <div className="progress bg-light">
                <div className="progress-bar" role="progressbar" style={{width: `${this.props.data.rate}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.data.rate}</div>
            </div>
        </div> 
        );
    }
}
 
export default Skill;