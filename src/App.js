
import './App.css';

function App() {
  return (
    <div className="App"> 
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
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">html<span>70%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
              </div>
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">css<span>80%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
              </div>
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">javascript<span>90%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{ width: '90%' }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
              </div>
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">reactjs<span>100%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
              </div>
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">nodejs<span>100%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
              </div>
              <div className="bar my-3">
                <h5 className="text-light text-uppercase d-flex justify-content-between">English proficiency<span>70%</span></h5>
                <div className="progress bg-light">

                  <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
              </div>
            
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
            <div class="col-md-6 col-lg-4 my-3">
              <div class="card">
                <img style={{height: "200px"}} src={require('./img/projects-coffee-1.jpeg')} alt="" className="card-img-top"/>
                <h1 class="my-2 text-capitalize">Project showcase</h1>
                  <p class="lead text-muted">build UI and UX for Project Showcase website using HTML, CSS, Javascript as an assignment.</p>
                <hr class="mb-0"/>
                <div class="card-footer d-flex justify-content-between px-0">
                <h4>03/15/2022</h4>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 my-3">
        <div class="card">
        <img style={{height: "200px"}} src={require('./img/projects-coffee-2.jpeg')} alt="" className="card-img-top"
                />
          <h1 class="my-2 text-capitalize">Project showcase</h1>
          <p class="lead text-muted">
          build UI and UX for Project Showcase website using HTML, CSS, Javascript as an assignment

          </p>
          <hr class="mb-0"/>
          <div class="card-footer d-flex justify-content-between px-0">
            <h4>03/27/2022</h4>
          </div>
        </div>
      </div>
     
      <div class="col-md-6 col-lg-4 my-3 mx-auto">
        <div class="card">
        <img style={{height: "200px"}} src={require('./img/projects-tea-1.jpeg')} alt="" className="card-img-top" />
          <h1 class="my-2 text-capitalize">Search engine for Wikipedia</h1>
          <p class="lead text-muted"> Build simple search engine on web browser helping easier to find information at Wikipedia wevsite</p>
          <hr class="mb-0"/>
          <div class="card-footer d-flex justify-content-between px-0">
          <h4>04/27/2022</h4>
          </div>
        </div>
      </div>
  
        </div>
      </div>
    </section>

    <section id="current-project" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 py-5 about-text text-center align-self-center">
            <h2 className="text-uppercase">current projects</h2>
            <p className="lead text-light">Aside pictures are some projects that i am taking part in this time, hoping this obtaining your attention </p>
          </div>
          <div className="col-md-6 current-project-photo my-5">
            <img src={require('./img/projects-coffee-1.jpeg' )} alt="" className="current-project current-project-1 img-thumbnail"></img>
            <img src={require('./img/projects-coffee-2.jpeg')} alt="" className="current-project current-project-2 img-thumbnail"></img>
            <img src={require('./img/projects-tea-1.jpeg')}alt="" className="current-project current-project-3 img-thumbnail"></img>
            <img src={require('./img/projects-tea-2.jpeg')} alt="" className="current-project current-project-4 img-thumbnail"></img>
          </div>
        </div>
      </div>
    </section>
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


 </div>
 

  );
}

export default App;
