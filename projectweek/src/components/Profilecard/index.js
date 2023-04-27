import React from 'react';
import { useState } from 'react';
// import Peoplelist from "../Peoplelist";
import './style.css';
import Slider from '../Sliders';

function Profilecard(props) {
  const peopleArray = [
    {
      id: 'abc1',
      Name: 'Adam Adams',
      imageURL:
        'https://www.realmenrealstyle.com/wp-content/uploads/2021/07/5-10.jpg',
      HTMLvalue: 90,
      CSSvalue: 80,
      JSvalue: 70,
      Jestvalue: 60,
      Reactvalue: 60,
      Playwrightvalue: 50,
      githubprofile: 'http://github.com/adamadams',
      Linkedin: 'http://linkedin.com/adamadams',
      Slack: 'http://slack.com/adamadams',
      Email: 'AdamAdams@gmail.com',
    },
    {
      id: 'abc2',
      Name: 'Adam Aronson',
      imageURL:
        'https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=',
      HTMLvalue: 80,
      CSSvalue: 40,
      JSvalue: 60,
      Jestvalue: 90,
      Reactvalue: 80,
      Playwrightvalue: 70,
      githubprofile: 'http://github.com/adamaronson',
      Linkedin: 'http://linkedin.com/adamaronson',
      Slack: 'http://slack.com/adamaranson',
      Email: 'AdamAronson@gmail.com',
    },
    {
      id: 'abc3',
      Name: 'Ashley Abramovich',
      imageURL:
        'https://cdnuploads.aa.com.tr/uploads/Contents/2016/03/26/thumbs_b_c_028240d2d7371e522c9df64c274e6e7e.jpg',
      HTMLvalue: 60,
      CSSvalue: 60,
      JSvalue: 50,
      Jestvalue: 50,
      Reactvalue: 60,
      Playwrightvalue: 70,
      githubprofile: 'http://github.com/ashabramovich',
      Linkedin: 'http://linkedin.com/ashabramovich',
      Slack: 'http://slack.com/ashabramovich',
      Email: 'ashabramovich@gmail.com',
    },
    {
      id: 'abc4',
      Name: 'Brian Berman',
      imageURL:
        'https://www.shutterstock.com/image-photo/photo-good-mood-happy-coder-260nw-2231047147.jpg',
      HTMLvalue: 40,
      CSSvalue: 30,
      JSvalue: 50,
      Jestvalue: 30,
      Reactvalue: 20,
      Playwrightvalue: 10,
      githubprofile: 'http://github.com/brianberman',
      Linkedin: 'http://linkedin.com/brianberman',
      Slack: 'http://slack.com/brianberman',
      Email: 'BrianBerman@gmail.com',
    },
    {
      id: 'abc5',
      Name: 'Brad Bridge',
      imageURL:
        'https://media.istockphoto.com/id/1137939519/photo/young-african-american-programmer-working-on-desktop-pc-in-the-office.jpg?s=612x612&w=0&k=20&c=wUof-pz7PzIeWANe31DyUclQZGg4f9bpiePXIFHNuJk=',
      HTMLvalue: 70,
      CSSvalue: 70,
      JSvalue: 60,
      Jestvalue: 60,
      Reactvalue: 50,
      Playwrightvalue: 90,
      githubprofile: 'http://github.com/bradbridge',
      Linkedin: 'http://linkedin.com/bradbridge',
      Slack: 'http://slack.com/bradbridge',
      Email: 'BradBridge@gmail.com',
    },
    {
      id: 'abc6',
      Name: 'Elliot Alderson',
      imageURL:
        'https://www.nme.com/wp-content/uploads/2017/06/mrrobot_s2_cast_rami-malek2.jpg',
      HTMLvalue: 90,
      CSSvalue: 90,
      JSvalue: 90,
      Jestvalue: 90,
      Reactvalue: 90,
      Playwrightvalue: 90,
      githubprofile: 'http://github.com/elliotalderson',
      Linkedin: 'http://linkedin.com/elliotalderson',
      Slack: 'http://slack.com/elliotalderson',
      Email: 'ElliotAlderson@gmail.com',
    },
    {
      id: 'abc7',
      Name: 'Nigel Harrison',
      imageURL:
        'https://media.istockphoto.com/id/482913249/photo/richard-kirstin-balcony-laptop-038.jpg?s=612x612&w=0&k=20&c=gwhR3Wet0VBvnMBns4jc9OBnruv2nqYYyXCN7SbtXo8=',
      HTMLvalue: 50,
      CSSvalue: 55,
      JSvalue: 75,
      Jestvalue: 60,
      Reactvalue: 40,
      Playwrightvalue: 50,
      githubprofile: 'http://github.com/nigelharris',
      Linkedin: 'http://linkedin.com/nigelharris',
      Slack: 'http://slack.com/nigelharris',
      Email: 'nigelharris@gmail.com',
    },
    {
      id: 'abc8',
      Name: 'Shirley Knot',
      imageURL:
        'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=',
      HTMLvalue: 70,
      CSSvalue: 55,
      JSvalue: 70,
      Jestvalue: 60,
      Reactvalue: 50,
      Playwrightvalue: 45,
      githubprofile: 'http://github.com/shirleyknot',
      Linkedin: 'http://linkedin.com/shirleyknot',
      Slack: 'http://slack.com/knotshirley',
      Email: 'shirley.knot@gmail.com',
    },

    {
      id: 'abc9',
      Name: 'Phil Thomas',
      imageURL:
        'https://media.istockphoto.com/id/1166588777/photo/senior-man-remembering.jpg?s=612x612&w=0&k=20&c=nrXhvhJEZWQlsn4sdKN-CNrvIbRsF5Osiz6alpVQQLo=',
      HTMLvalue: 50,
      CSSvalue: 40,
      JSvalue: 70,
      Jestvalue: 60,
      Reactvalue: 80,
      Playwrightvalue: 50,
      githubprofile: 'http://github.com/philthomas',
      Linkedin: 'http://linkedin.com/philthomas',
      Slack: 'http://slack.com/philthomas',
      Email: 'philthomas119@gmail.com',
    },

    {
      id: 'abc10',
      Name: 'Jack Smith',
      imageURL:
        'https://media.istockphoto.com/id/1074638206/photo/side-view-long-beard-business-man-portrait.jpg?s=612x612&w=0&k=20&c=3CXnWtuXukFWvfiepdmohttsVe3GzF8q6zKR5SGp92U=',
      HTMLvalue: 80,
      CSSvalue: 70,
      JSvalue: 60,
      Jestvalue: 60,
      Reactvalue: 80,
      Playwrightvalue: 60,
      githubprofile: 'http://github.com/jacksmith',
      Linkedin: 'http://linkedin.com/jacksmith',
      Slack: 'http://slack.com/smithjack',
      Email: 'therealjacksmith@gmail.com',
    },
  ];

  const [currentID, setCurrentID] = useState('abc1');

  function handleClick() {
    setCurrentID('abc1');
  }

  function handleClick1() {
    setCurrentID('abc2');
  }

  function handleClick2() {
    setCurrentID('abc3');
  }

  function handleClick3() {
    setCurrentID('abc4');
  }

  function handleClick4() {
    setCurrentID('abc5');
  }

  function handleClick5() {
    setCurrentID('abc6');
  }

  function handleClick6() {
    setCurrentID('abc7');
  }

  function handleClick7() {
    setCurrentID('abc8');
  }

  function handleClick8() {
    setCurrentID('abc9');
  }

  function handleClick9() {
    setCurrentID('abc10');
  }

  let filteredArray = peopleArray.filter(
    (person) => person.id === currentID
  );

  return (
    <div className="nameandprofile">
      <div className="peoplenames">
        <h1> Bootcamper Directory</h1>

        <div className="topheadings">
          <h3 className="nameheadings">A-M</h3>
          <h3 className="nameheadings">Cohort</h3>
        </div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick}>
            Adam Adams
          </span>
          <p className="buttontext">Cohort 1</p>
        </div>

        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick1}>
            Adam Aronson
          </span>
          <p className="buttontext">Cohort 1</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick2}>
            Ashley Abramovich
          </span>
          <p className="buttontext">Cohort 2</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick3}>
            Brian Berman
          </span>
          <p className="buttontext">Cohort 2</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick4}>
            Brad Bridge
          </span>
          <p className="buttontext">Cohort 3</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick5}>
            Elliot Alderson
          </span>
          <p className="buttontext">Cohort 4</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick9}>
            Jack Smith
          </span>
          <p className="buttontext">Cohort 6</p>
        </div>
        <div className="plainline"></div>

        <h3>N-Z</h3>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick6}>
            Nigel Harrison
          </span>
          <p className="buttontext">Cohort 4</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick8}>
            Phil Thomas
          </span>
          <p className="buttontext">Cohort 5</p>
        </div>
        <div className="plainline"></div>

        <div className="namecohort">
          <span className="buttontext" onClick={handleClick7}>
            Shirley Knot
          </span>
          <p className="buttontext">Cohort 5</p>
        </div>
        <div className="plainline"></div>
      </div>
      {filteredArray.map((person) => (
        <div className="personalpanel" key={person.id}>
          <img
            className="profilepic"
            src={person.imageURL}
            alt="profile pic"
          />
          <h3 className="personname">{person.Name}</h3>
          <div className="progressEnds">
            <h4>Needs Focus</h4>
            <h4>Confident</h4>
          </div>
          <div className="plainline123right"></div>

          <div className="proficiencyfields">
            <p className="proficiencytext">HTML</p>
            <Slider
              className="proficiencybar"
              value={person.HTMLvalue}
            />
          </div>

          <div className="proficiencyfields">
            <p className="proficiencytext">CSS</p>
            <Slider
              className="proficiencybar"
              value={person.CSSvalue}
            />
          </div>

          <div className="proficiencyfields">
            <p className="proficiencytext">JS</p>
            <Slider
              className="proficiencybar"
              value={person.JSvalue}
            />
          </div>

          <div className="proficiencyfields">
            <p className="proficiencytext">Jest</p>
            <Slider
              className="proficiencybar"
              value={person.Jestvalue}
            />
          </div>

          <div className="proficiencyfields">
            <p className="proficiencytext">Playwright</p>
            <Slider
              className="proficiencybar"
              value={person.Playwrightvalue}
            />
          </div>

          <h4>Proficiency awards</h4>
          <div className="plainline123right"></div>
          <br></br>
          <br></br>

          <div className="github">
            <img
              className="githublogo"
              src="https://img.icons8.com/ios-filled/256/github.png"
            ></img>
            <p>{person.githubprofile}</p>
          </div>
          <div className="plainline123right"></div>

          <div className="linkedin">
            <img
              className="linkedinlogo"
              src="https://img.icons8.com/ios-filled/256/linkedin.png"
            ></img>
            <p>{person.Linkedin}</p>
          </div>
          <div className="plainline123right"></div>

          <div className="slack">
            <img
              className="slacklogo"
              src="https://img.icons8.com/ios-filled/256/slack.png"
            ></img>
            <p>{person.Slack}</p>
          </div>
          <div className="plainline123right"></div>

          <div className="email">
            <img
              className="emaillogo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/If_aiga_mail_134146_%281%29.png?20170917074726"
            ></img>
            <p>{person.Email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profilecard;
