// import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/bootstrap.min.css'
import Background from './assets/mainpicture.jpg';
import Bubble from './assets/bubble.png';

import LinkedInIcon from './assets/linkedin.png';
import InstagramIcon from './assets/instagram.png';
import GitHubIcon from './assets/github.png';
import BeyondHelloWorld from './BeyondHelloWorld';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 firstLeftDiv" style={{backgroundImage:`url(${Bubble})`, backgroundRepeat: "repeat", color:"#1E3512", position: "relative"}}>
          <div className="titleName">
            <strong>Femin
            <br />
            Dharamshi.</strong>
            </div>
            <div className="nicemeetingdiv">
              <div className="nicemeeting">
                Nice to<br />meet you
              </div>
              <a href="https://www.instagram.com/beyondhelloworld/" target="_blank"><button className="btn_connectIG">
                DM me
              </button></a>
            </div>

            <div className="socialDiv">
              <a href="https://www.linkedin.com/in/femindharamshi/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn Icon"/></a>
              <a href="https://www.instagram.com/beyondhelloworld/" target="_blank"><img src={InstagramIcon} alt="Instagram Icon"/></a>
              <a href="https://github.com/fdharamshi" target="_blank"><img src={GitHubIcon} alt="Github Icon"/></a>
            </div>

        </div>


        <div className="col-12 col-md-12 col-lg-6 col-xl-6 firstRightDiv" style={{backgroundImage:`url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"right", color:"white", position:"relative"}}>
          {/* <div className="quickLinkWrapper">
            <a href="https://github.com/fdharamshi" target="_blank"><button class="btn_quicklink">
              Github
            </button></a>
            <a href="https://play.google.com/store/apps/details?id=com.femindharamshi.spa" target="_blank"><button class="btn_quicklink">
              Codify - Codes On The Go
            </button></a>
            <a href="https://play.google.com/store/apps/details?id=com.rotibank.mumbai.donate" target="_blank"><button class="btn_quicklink">
              Mumbai Roti Bank App
            </button></a>
          </div> */}
          <div style={{height: "100%", width:"100%", backgroundColor: "rgba(0,0,0,0.1)", position: "absolute", top: 0, left: 0}}></div>
        </div>
      </div>

      <BeyondHelloWorld />

      <Footer />
    </div>
  );
}

export default App;
