import react from 'react';
import './library.css';
import { BrowserRouter } from 'react-router-dom';

function Library() {
  return (
    <div className="resources">
      <h1> Resources </h1>
      <div class="parent">
        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />
        </div>

        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
        </div>

        <div className="libraryIcon">
          <a href="/JavascriptResource" className="libraryIcon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </a>
        </div>
        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </div>
        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />
        </div>

        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
        </div>

        <div className="libraryIcon">
          <img
            className="libraryIcon"
            src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Library;
