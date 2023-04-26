import './ResourceLibrary.css';
import React, { useState } from 'react';

function ResourceLibrary() {
  // default tool
  const [filter, setFilter] = useState('');
  const [resources, setResources] = useState([
    {
      id: 1,
      tool: 'Javascript',
      title: 'MDN Web Docs',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      description:
        'Comprehensive documentation and guides for JavaScript on the web.',
      keywords: ['documentation', 'guides'],
    },
    {
      id: 2,
      tool: 'Javascript',
      title: 'JavaScript.info',
      link: 'https://javascript.info/',
      description:
        'In-depth and up-to-date tutorials, explanations, and interactive exercises for JavaScript.',
      keywords: ['tutorials', 'interactive'],
    },
    {
      id: 3,
      tool: 'Javascript',
      title: 'JavaScript Design Patterns',
      link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      description:
        'A comprehensive guide to using design patterns in JavaScript.',
      keywords: ['design patterns', 'best practices'],
    },
    {
      id: 4,
      tool: 'Javascript',
      title: 'Eloquent JavaScript',
      link: 'https://eloquentjavascript.net/',
      description:
        'A book and online tutorial that covers the basics and advanced topics of JavaScript.',
      keywords: ['book', 'tutorial'],
    },
    {
      id: 5,
      tool: 'Javascript',
      title: 'JavaScript30',
      link: 'https://javascript30.com/',
      description:
        'A free 30-day coding challenge that covers various topics in JavaScript.',
      keywords: ['challenge', 'learning'],
    },
    {
      id: 6,
      tool: 'Javascript',
      title: 'You Don’t Know JS',
      link: 'https://github.com/getify/You-Dont-Know-JS',
      description:
        'A book series that covers the nuances of JavaScript.',
      keywords: ['book', 'nuances'],
    },
    {
      id: 7,
      tool: 'Javascript',
      title: 'JSFiddle',
      link: 'https://jsfiddle.net/',
      description:
        'An online code editor that allows you to experiment with JavaScript, HTML, and CSS code snippets.',
      keywords: ['code editor', 'experimentation'],
    },
    {
      id: 8,
      tool: 'Javascript',
      title: 'Node.js',
      link: 'https://nodejs.org/en/',
      description:
        'A JavaScript runtime built on Chrome’s V8 JavaScript engine that enables server-side JavaScript development.',
      keywords: ['server-side', 'runtime'],
    },
    {
      id: 9,
      tool: 'Javascript',
      title: 'jQuery',
      link: 'https://jquery.com/',
      description:
        'A fast, small, and feature-rich JavaScript library that simplifies HTML document traversing, event handling, and animation.',
      keywords: ['library', 'simplify'],
    },
    {
      id: 10,
      tool: 'Javascript',
      title: 'React',
      link: 'https://reactjs.org/',
      description:
        'A JavaScript library for building user interfaces that enables the creation of reusable UI components.',
      keywords: ['user interfaces', 'reusable components'],
    },
    {
      id: 11,
      tool: 'Javascript',
      title: 'Vue.js',
      link: 'https://vuejs.org/',
      description:
        'A progressive framework for building user interfaces that allows the creation of reusable components.',
      keywords: ['user interfaces', 'progressive'],
    },
    {
      id: 12,
      tool: 'Javascript',
      title: 'Angular',
      link: 'https://angular.io/',
      description:
        'A TypeScript-based open-source framework for building web applications.',
      keywords: ['web applications', 'TypeScript'],
    },
    {
      id: 13,
      tool: 'Javascript',
      title: 'Bootstrap',
      link: 'https://getbootstrap.com/',
      description:
        'A popular front-end framework that includes pre-built CSS and JavaScript components for rapid UI development.',
      keywords: ['front-end', 'UI development'],
    },
    {
      id: 14,
      title: 'MDN Web Docs',
      tool: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      description:
        'Comprehensive documentation and guides for HTML on the web.',
      keywords: ['documentation', 'guides'],
    },
    {
      id: 15,
      title: 'HTML Dog',
      tool: 'HTML',
      link: 'https://htmldog.com/',
      description:
        'A beginner-friendly online guide to HTML and CSS that covers the basics and advanced topics.',
      keywords: ['guide', 'beginner-friendly'],
    },
    {
      id: 16,
      title: 'HTML5 Rocks',
      tool: 'HTML',
      link: 'https://www.html5rocks.com/',
      description:
        'A website that provides up-to-date news, tips, and tricks for HTML5 and related technologies.',
      keywords: ['news', 'tips', 'HTML5'],
    },
    {
      id: 17,
      title: 'HTML Validator',
      tool: 'HTML',
      link: 'https://validator.w3.org/',
      description:
        'A free online tool provided by the W3C that checks the validity of HTML documents.',
      keywords: ['validator', 'W3C'],
    },
    {
      id: 18,
      title: 'W3Schools',
      tool: 'HTML',
      link: 'https://www.w3schools.com/html/',
      description:
        'A popular website that provides tutorials, references, and examples for HTML and other web technologies.',
      keywords: ['tutorials', 'examples', 'references'],
    },
    {
      id: 19,
      title: 'HTML5 Doctor',
      tool: 'HTML',
      link: 'http://html5doctor.com/',
      description:
        'A website that offers advice and insights on HTML5 techniques and best practices.',
      keywords: ['advice', 'best practices', 'HTML5'],
    },
    {
      id: 20,
      title: 'Bootstrap',
      tool: 'HTML',
      link: 'https://getbootstrap.com/',
      description:
        'A popular front-end framework that includes pre-built HTML and CSS components for rapid UI development.',
      keywords: ['front-end', 'UI development'],
    },
    {
      id: 21,
      title: 'HTML5 UP',
      tool: 'HTML',
      link: 'https://html5up.net/',
      description:
        'A collection of responsive HTML5 templates that can be customized for personal or commercial use.',
      keywords: ['templates', 'responsive'],
    },
    {
      id: 22,
      title: 'CodePen',
      tool: 'HTML',
      link: 'https://codepen.io/',
      description:
        'A social development environment for front-end developers to showcase their HTML, CSS, and JavaScript work.',
      keywords: ['development environment', 'showcase'],
    },
    {
      id: 23,
      title: 'Can I Use',
      tool: 'HTML',
      link: 'https://caniuse.com/',
      description:
        'A website that provides up-to-date browser support tables for HTML5, CSS3, and other web technologies.',
      keywords: ['browser support', 'tables'],
    },
    {
      id: 24,
      title: 'HTML Kit',
      tool: 'HTML',
      link: 'https://www.htmlkit.com/',
      description:
        'A full-featured editor and validator for HTML and other web technologies.',
      keywords: ['editor', 'validator'],
    },
    {
      id: 25,
      tool: 'HTML',
      title: 'The HTML5 Herald',
      link: 'https://html5herald.com/',
      description:
        'A weekly newsletter that features news, articles, and tips for HTML5 and related technologies.',
      keywords: ['newsletter', 'news', 'tips', 'HTML5'],
    },
    {
      id: 26,
      tool: 'CSS',
      title: 'CSS Tricks',
      link: 'https://css-tricks.com/',
      description: 'Tips, Tricks, and Techniques on using CSS.',
      keywords: ['tips', 'tricks', 'techniques', 'CSS'],
    },
    {
      id: 27,
      tool: 'CSS',
      title: 'CSS Zen Garden',
      link: 'http://www.csszengarden.com/',
      description:
        'A demonstration of what can be accomplished through CSS-based design.',
      keywords: ['demo', 'design', 'CSS'],
    },
    {
      id: 28,
      tool: 'CSS',
      title: 'A List Apart',
      link: 'https://alistapart.com/',
      description:
        'Explores the design, development, and meaning of web content, with a special focus on web standards and best practices.',
      keywords: [
        'design',
        'development',
        'web content',
        'web standards',
        'best practices',
        'CSS',
      ],
    },
    {
      id: 29,
      tool: 'CSS',
      title: 'CSS Grid Garden',
      link: 'https://cssgridgarden.com/',
      description: 'A game for learning CSS grid layout.',
      keywords: ['game', 'learning', 'CSS grid layout'],
    },
    {
      id: 30,
      tool: 'CSS',
      title: 'CSS Layout Generator',
      link: 'https://csslayout.io/',
      description: 'A simple, responsive CSS layout generator.',
      keywords: ['generator', 'responsive', 'CSS layout'],
    },
    {
      id: 31,
      tool: 'CSS',
      title: 'CSS Gradient',
      link: 'https://cssgradient.io/',
      description: 'A free online tool to create CSS gradients.',
      keywords: ['tool', 'CSS gradients'],
    },
    {
      id: 32,
      tool: 'CSS',
      title: 'CSS Flexbox Froggy',
      link: 'https://flexboxfroggy.com/',
      description: 'A game for learning CSS flexbox layout.',
      keywords: ['game', 'learning', 'CSS flexbox layout'],
    },
    {
      id: 33,
      tool: 'CSS',
      title: 'Animate.css',
      link: 'https://animate.style/',
      description: 'A library of cross-browser CSS animations.',
      keywords: ['library', 'CSS animations'],
    },
    {
      id: 34,
      tool: 'CSS',
      title: 'Can I Use',
      link: 'https://caniuse.com/',
      description:
        'Up-to-date browser support tables for front-end web technologies on desktop and mobile browsers.',
      keywords: [
        'browser support',
        'front-end web technologies',
        'desktop',
        'mobile browsers',
      ],
    },
    {
      id: 35,
      tool: 'CSS',
      title: 'CSS Validator',
      link: 'https://jigsaw.w3.org/css-validator/',
      description: 'A CSS validator to check the validity of CSS.',
      keywords: ['validator', 'CSS'],
    },
    {
      id: 36,
      tool: 'CSS',
      title: 'CSS Diner',
      link: 'https://flukeout.github.io/',
      description: 'A game for learning CSS selectors.',
      keywords: ['game', 'learning', 'CSS selectors'],
    },
    {
      id: 37,
      tool: 'CSS',
      title: 'Unsplash',
      link: 'https://unsplash.com/',
      description: 'A platform for free, high-resolution photos.',
      keywords: ['photos', 'free', 'high-resolution'],
    },
    {
      id: 38,
      tool: 'React',
      title: 'React Docs',
      link: 'https://reactjs.org/docs/getting-started.html',
      description: 'Official documentation for React.',
      keywords: ['official', 'documentation', 'React'],
    },
    {
      id: 39,
      tool: 'React',
      title: 'React Native',
      link: 'https://reactnative.dev/',
      description: 'Official website for React Native.',
      keywords: ['official', 'website', 'React Native'],
    },
    {
      id: 40,
      tool: 'React',
      title: 'Create React App',
      link: 'https://create-react-app.dev/',
      description:
        'A command-line interface tool that helps you to create a new React project.',
      keywords: ['CLI', 'tool', 'create', 'React project'],
    },
    {
      id: 41,
      tool: 'React',
      title: 'React Router',
      link: 'https://reactrouter.com/',
      description: 'A popular routing library for React.',
      keywords: ['routing', 'library', 'React'],
    },
    {
      id: 42,
      tool: 'React',
      title: 'Redux',
      link: 'https://redux.js.org/',
      description:
        'A predictable state container for JavaScript apps.',
      keywords: ['state container', 'JavaScript', 'predictable'],
    },
    {
      id: 43,
      tool: 'React',
      title: 'Next.js',
      link: 'https://nextjs.org/',
      description:
        'A React framework that enables server-side rendering and other features.',
      keywords: ['framework', 'server-side rendering', 'React'],
    },
    {
      id: 44,
      tool: 'React',
      title: 'React Native Elements',
      link: 'https://reactnativeelements.com/',
      description: 'A cross-platform UI toolkit for React Native.',
      keywords: ['UI toolkit', 'cross-platform', 'React Native'],
    },
    {
      id: 45,
      tool: 'React',
      title: 'React Bootstrap',
      link: 'https://react-bootstrap.github.io/',
      description: 'Bootstrap components built with React.',
      keywords: ['Bootstrap', 'components', 'React'],
    },
    {
      id: 46,
      tool: 'React',
      title: 'Material-UI',
      link: 'https://material-ui.com/',
      description:
        "A popular React UI framework based on Google's Material Design.",
      keywords: [
        'UI framework',
        'Google',
        'Material Design',
        'React',
      ],
    },
    {
      id: 47,
      tool: 'React',
      title: 'React Native Paper',
      link: 'https://callstack.github.io/react-native-paper/',
      description:
        'A material design implementation for React Native.',
      keywords: ['material design', 'implementation', 'React Native'],
    },
    {
      id: 48,
      tool: 'React',
      title: 'React Native Vector Icons',
      link: 'https://oblador.github.io/react-native-vector-icons/',
      description: 'A set of customizable icons for React Native.',
      keywords: ['icons', 'customizable', 'React Native'],
    },
    {
      id: 49,
      tool: 'React',
      title: 'React Hook Form',
      link: 'https://react-hook-form.com/',
      description:
        'A library for building performant and flexible forms with React hooks.',
      keywords: [
        'library',
        'forms',
        'performant',
        'flexible',
        'React hooks',
      ],
    },
    {
      id: 50,
      tool: 'Jest',
      title: 'Jest',
      link: 'https://jestjs.io/',
      description:
        'Official website for Jest, a JavaScript testing framework.',
      keywords: [
        'official',
        'website',
        'JavaScript',
        'testing',
        'framework',
      ],
    },
    {
      id: 51,
      tool: 'Jest',
      title: 'Jest Docs',
      link: 'https://jestjs.io/docs/getting-started',
      description: 'Official documentation for Jest.',
      keywords: ['official', 'documentation', 'Jest'],
    },
    {
      id: 52,
      tool: 'Jest',
      title: 'Enzyme',
      link: 'https://enzymejs.github.io/enzyme/',
      description:
        "A JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.",
      keywords: [
        'JavaScript',
        'testing',
        'utility',
        'React',
        'assert',
        'manipulate',
        'traverse',
      ],
    },
    {
      id: 53,
      tool: 'Jest',
      title: 'Testing Library',
      link: 'https://testing-library.com/docs/react-testing-library/intro/',
      description:
        'A simple and complete React testing utilities that encourage good testing practices.',
      keywords: ['React', 'testing', 'utilities', 'good practices'],
    },
    {
      id: 54,
      tool: 'Jest',
      title: 'Mock Functions',
      link: 'https://jestjs.io/docs/mock-functions',
      description:
        'Jest documentation on how to create and use mock functions in your tests.',
      keywords: ['documentation', 'mock functions', 'tests'],
    },
    {
      id: 55,
      tool: 'Jest',
      title: 'Snapshot Testing',
      link: 'https://jestjs.io/docs/snapshot-testing',
      description:
        'Jest documentation on how to use snapshot testing in your tests.',
      keywords: ['documentation', 'snapshot testing', 'tests'],
    },
    {
      id: 56,
      tool: 'Jest',
      title: 'Code Coverage',
      link: 'https://jestjs.io/docs/code-coverage',
      description:
        'Jest documentation on how to measure and improve code coverage in your tests.',
      keywords: ['documentation', 'code coverage', 'tests'],
    },
    {
      id: 57,
      tool: 'Jest',
      title: 'Jest Cheat Sheet',
      link: 'https://github.com/sapegin/jest-cheat-sheet',
      description: 'A quick reference guide for using Jest.',
      keywords: ['cheat sheet', 'quick reference', 'Jest'],
    },
    {
      id: 58,
      tool: 'Jest',
      title: 'Jest VS Code',
      link: 'https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest',
      description:
        'A VS Code extension for running Jest tests and viewing results.',
      keywords: ['VS Code', 'extension', 'Jest', 'tests', 'results'],
    },
    {
      id: 59,
      tool: 'Jest',
      title: 'Jest Runner',
      link: 'https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner',
      description:
        'Another VS Code extension for running Jest tests from within the editor.',
      keywords: ['VS Code', 'extension', 'Jest', 'tests'],
    },
  ]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleButtonClick = (tool) => {
    setFilter(tool);
  };

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(filter.toLowerCase()) &&
      resource.tool.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="ResourcesTitle"> Resources</h1>
      <div class="parent">
        <button
          value="html"
          onClick={() => handleButtonClick('html')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />
        </button>

        <button
          value="CSS"
          onClick={() => handleButtonClick('css')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
        </button>

        <button
          value="Javascript"
          onClick={() => handleButtonClick('javascript')}
          className="libraryIcon"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </button>
        <button
          value="React"
          onClick={() => handleButtonClick('react')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </button>
        <button
          value="jest"
          onClick={() => handleButtonClick('jest')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />
        </button>

        <button
          value="Figma"
          onClick={() => handleButtonClick('figma')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
        </button>

        <button
          value="Playwright"
          onClick={() => handleButtonClick('playwright')}
          className="libraryIcon"
        >
          <img
            className="libraryIcon"
            src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png"
          />
        </button>
      </div>

      <br />

      <span>Title</span>
      <span>Link</span>
      <span>Description</span>
      <span>Favourite</span>
      <ul className="fitlerResults">
        {filteredResources.map((resource) => (
          <li key={resource.id}>
            <>
              <span className="titleLink">
                <h3>{resource.title}</h3>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.link}
                </a>
              </span>
              <span classname="descFav">
                <p>{resource.description}</p>
                <input className="resourceFav" type="checkbox" />
              </span>
            </>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceLibrary;
