import react from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useState } from 'react';
import SliderDashboard from '../SliderDashboard/SliderDashboard';
import './PersonalPanel.css';
import '../SliderDashboard/style.css';

function PersonalPanel() {
  return (
    <div className="page">
      <div className="personalpanel1">
        <img
          className="profilepic1"
          src="https://imgs.search.brave.com/IFKyNI8AIS350jJ1bhOVF5BM8OWTzUmYCl69LGB5lk4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90ZWNo/bW9uaXRvci5haS93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/NC8yMDIwLzA4L0No/cmlzLU1lYWgtMTQ3/MngxNDcyLmpwZw"
          alt="profile pic"
        />
        <h3 className="personname1"> Chris Meah</h3>

        <div className="plainline123right1"></div>
        <br></br>
        <br></br>

        <div className="github1">
          <img
            className="githublogo1"
            src="https://img.icons8.com/ios-filled/256/github.png"
          ></img>
          <p></p>
        </div>
        <div className="plainline123right1"></div>

        <div className="linkedin1">
          <img
            className="linkedinlogo1"
            src="https://img.icons8.com/ios-filled/256/linkedin.png"
          ></img>
          <p></p>
        </div>
        <div className="plainline123right1"></div>

        <div className="slack1">
          <img
            className="slacklogo1"
            src="https://img.icons8.com/ios-filled/256/slack.png"
          ></img>
          <p></p>
        </div>
        <div className="plainline123right1"></div>

        <div className="email1">
          <img
            className="emaillogo1"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/If_aiga_mail_134146_%281%29.png?20170917074726"
          ></img>
          <p></p>
        </div>
      </div>
      <div className="userDashRight">
        <div className="UserProficiency1">
          <h2>Progress Tracker </h2>
          <div className="progressEnds1">
            <h4>Needs Focus</h4>
            <h4>Confident</h4>
          </div>
          <div className="plainline123right2"></div>

          <div className="proficiencyfields1">
            <p className="proficiencytext1">HTML</p>
            <SliderDashboard className="proficiencybar1" />
          </div>

          <div className="proficiencyfields1">
            <p className="proficiencytext1">CSS</p>
            <SliderDashboard className="proficiencybar1" />
          </div>

          <div className="proficiencyfields1">
            <p className="proficiencytext1">JS</p>
            <SliderDashboard className="proficiencybar1" />
          </div>

          <div className="proficiencyfields1">
            <p className="proficiencytext1">Jest</p>
            <SliderDashboard className="proficiencybar1" />
          </div>

          <div className="proficiencyfields1">
            <p className="proficiencytext1">Playwright</p>
            <SliderDashboard className="proficiencybar1" />
          </div>
          <div className="proficiencyfields1">
            <p className="proficiencytext1">React</p>
            <SliderDashboard className="proficiencybar1" />
          </div>
        </div>
        <h2> Proficiency Awards</h2>
        <div className="userAwards">
          <div ClassName="awardz">
            <img
              className="award1"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>
      
          </div>
          <div ClassName="awardz">
            <img
              className="award1"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>{' '}
          
          </div>
          <div ClassName="awardz">
            <img
              className="award1"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>{' '}
          
          </div>
          <div ClassName="awardz">
            <img
              className="award2"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>{' '}
            
          </div>
          <div ClassName="awardz">
            <img
              className="award2"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>{' '}
          
          </div>
          <div ClassName="awardz">
            <img
              className="award2"
              src="https://i.ibb.co/hBwsv18/Untitled-2.png"
            ></img>{' '}
          
          </div>
        </div>
        <h2> Support Stats</h2>
        <div className="SupportStats">
          <div className="statsbar">
            <img
              className="TicketsCompleted"
              src="https://imgs.search.brave.com/Z9AGKuzDAsvvbb_cCEQJTX-rHXqzGwf4vqMSAEmXwSE/rs:fit:980:976:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDMyMDU4LnBu/Zw"
            ></img>
            <h2> 1245</h2>
            <p> Tickets Completed</p>
          </div>
          <div className="statsbar">
            <img
              className="Responsiveness"
              src="https://imgs.search.brave.com/nY5ado5wIOeMpGIC1FCdz612F9bEhLWUN5MpfSuu6YI/rs:fit:250:163:1/g:ce/aHR0cHM6Ly9jbGFp/bW5lZ290aWF0aW9u/YW5kcmJwLmhoY2dy/b3VwLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMS9p/Y29uLXJlc3BvbnNp/dmVuZXNzLnBuZw"
            ></img>
            <h2> 99%</h2>
            <p> Responsiveness</p>
          </div>
          <div className="statsbar">
            <img
              className="SupportFeedback"
              src="https://imgs.search.brave.com/5lJxlJadgwGnpTpPHJ9tbraGGAv9o9SdtU4TgQWdGic/rs:fit:981:981:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2Rv/d25sb2FkXzM3NDA0/MC5wbmc"
            ></img>
            <h2> 99%</h2>
            <p> Support Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPanel;
