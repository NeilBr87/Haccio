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
      <h1 className='ResourcesTitle'> Resources</h1>
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
          onClick={() => handleButtonClick('javascript')}
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
              <span className='titleLink'>
                <h3>{resource.title}</h3>
                <p>{resource.link}</p>{' '}
              </span>
              <span classname="descFav">
                <p>{resource.description}</p>
                <input className="resourceFav" type="checkbox" />
              </span>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceLibrary;
