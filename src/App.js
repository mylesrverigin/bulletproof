import family from "./images/DSC_7358.jpg"
import odim from "./images/ODIM.jpg"
import linkedIn from "./images/1280px-LinkedIn_Logo.png"
import github from "./images/github.png"
import email from "./images/1024px-Email_icon.png"
import resume from "./images/Document-icon-blue-3810963993.png"
import './App.css';
import './test'
import { CatchALetter } from "./test"

// Image References
// Linkedin - https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-network-round-gloss-shine%2F512%2FLinkedIn_Social-Network-Communicate-Page-Curl-Effect-Circle-Glossy-Shadow-Shine.png&f=1&nofb=1&ipt=6a9c6a316954f449e448e817a05eb8fc7c41c47315cd41a005e6ff4492bba8a6&ipo=images
// github - https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fitnotes.me%2Fimages%2FgitHub-logo.png&f=1&nofb=1&ipt=87f3c715c5ab234ad4ce68fc6dc4f82b1c8c78be0d86f6d98e6b010d973a6498&ipo=images
// email - https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe8%2FEmail_icon.svg%2F1024px-Email_icon.svg.png&f=1&nofb=1&ipt=cc857f7c5ed04baf64fd98f6ad1f14f4e1eccb9085adae97e4fbb2106c83fb1c&ipo=images
// resume - https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fheathpilton.com.au%2Fwp-content%2Fuploads%2F2013%2F06%2FDocument-icon-blue.png&f=1&nofb=1&ipt=ef9b92b19c7a9319f68128e340a577deb2b43e0288e6d117e947e3417856d482&ipo=images




function App() {
    
  return (
    
    <div className="body" > 
        <script src="./test.js"></script>
      {/**************** All Exists Within This Bounday **************/}
      <div className="top_section">
        

        
        <div className="prouds">
        <img className="profile_pic" src={family} alt=""/>
          <ul>
            <h4>Certifications</h4>
            <li>Supply Chain Manager</li>
            <li>Full Stack Web Developement</li>
            <h4>Hobbys</h4>
            <li>Body Building</li>
            <li>Father of Four</li>
          </ul>
        </div>
      

      <div className="socials">
        <a href ="https://www.linkedin.com/in/robertwpenney/" target="_blank" rel="noopener noreferrer"><img className="socialspic" src = {linkedIn} alt="Linked In"></img></a>
        <a href ="https://github.com/ArboreticTruth-prog" target="_blank" rel="noopener noreferrer"><img className="socialspic" src = {github} alt="GitHub"></img></a>
      </div>

      <div className="personal_info">
        <div className="personal">
            <a href="mailto: robertwpenney@outlook.com"><img className="socialspic" src={email} alt="Email Me" /></a>
            <p>Send me a personal Email</p>
        </div>
        
        <div className="personal">
            <a href={""} download><img className="socialspic" src={resume} alt="Download My Resume"/></a>
            <p>Download my Resume</p>
        </div>
        
        </div>

      </div>

      <div className="slide_deck">
        <div className="inner_container">

            <div className="button_cont">
                <button className="button">Left Button</button>
            </div>

            <div className="game_container" id="game_container">
                <p className="para" id="paragraph1"></p>
                <p className="para" id="paragraph2"></p>
                <p className="para" id="paragraph3"></p>
                <p className="para" id="paragraph4"></p>
            </div>

            <div className="button_cont">
                <button className="button" onClick={CatchALetter}>Right Button</button>
            </div>
        </div>
      </div>

    {/**************** All Exists Within This Bounday **************/}
    </div>
    
  );
}
export default App;
