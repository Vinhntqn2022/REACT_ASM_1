import React, {Component} from 'react';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-md-6 d-flex flex-column justify-content-center align-items-start">
                            <div className="my-2 d-flex justify-contenr-center align-items-center">
                                <img style={{ width: '200px' }} src={require('./img/banner-1.jpeg')} alt="" className="img-fluid img-thumbneil rounded-circle" ></img>
                                <h1 className="text-uppercase text-warning ml-3">nguyen The Vinh</h1>
                            </div>
                            <div className="top-icons d-flex flex-wrap">
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fab fa-facebook"></i>facebook</a>
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fab fa-instagram"></i>instagram</a>
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fab fa-linkedin"></i>linkedin</a>
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fa-solid fa-envelope"></i>email</a>
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fab fa-twitter"></i>twtter</a>
                                <a href={'url'} className="mr-5 my-2 text-capitalize text-warning"><i className="mr-2 fa-solid fa-location-dot"></i>location</a>
                            </div>
                        </div>                   
                        <div className="col-10 col-md-6 no-padding">
                            <div className="my-2 text-center">
                                <h1 className="text-capitalize mb-2 text-light">I am Fresher Front-End Developer</h1>
                                <p className="text-light">Technical graduated and adepted telecom jobs for over 15 years from 2006. After success with that area of expertise, I am eager to change my career by taking part in front-end developer course at FPT Software Academy, focusing on Reactjs framework. I am seeking an interactive team where I will continue expanding my JavaScript knowledge into perfecting accessibility and responsive design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </header>
        );
    }
}
 
export default Header;