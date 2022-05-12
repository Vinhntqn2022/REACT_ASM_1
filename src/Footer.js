import React, { Component } from "react";
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="py-2 px-3">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-baseline">
                        <h3 className="text-uppercase text-light">certification </h3>
                        <h5 className="text-capitalize">
                            &copy;FPT Software Academy
                        </h5>
                    </div>
                </div>
             </footer>
        );
    }
}
 
export default Footer;