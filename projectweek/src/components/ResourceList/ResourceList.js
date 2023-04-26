import React from 'react';
import './ResourceList.css';

const DOCUMENTS = [
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
];

function ResourceList({ filter }) {
  const filteredDocuments = DOCUMENTS.filter((document) =>
    document.keywords.some((keyword) =>
      keyword.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <ul>
      <span className="documentReturns">
        {filteredDocuments.map((document) => (
          <li key={document.id}>
            <h2>{document.title}</h2>
            <p>{document.link}</p>
            <p> {document.description}</p>
            <input type="checkbox"></input>
          </li>
        ))}
      </span>
    </ul>
  );
}

export default ResourceList;
