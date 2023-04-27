import React, { useState } from 'react';
import './input.css';

function ResourceInput(props) {
  const [tool, setTool] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = {
      id: Date.now(),
      tool,
      title,
      link,
      description,
      keywords: keywords.split(',').map((keyword) => keyword.trim()),
    };

    props.onSubmit(newResource);

    setTool('');
    setTitle('');
    setLink('');
    setDescription('');
    setKeywords('');
  };

  return (
    <div className="inputForm">
      <form className="ResourceForm" onSubmit={handleSubmit}>
        <label>
          Tool:
          <select
            className="ResourceForm"
            type="dropdown"
            value={tool}
            onChange={(event) => setTool(event.target.value)}
          >
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">React</option>
            <option value="4">Javascript</option>
            <option value="5">Jest</option>
            <option value="6">Figma</option>
            <option value="7">Playwright</option>
          </select>
        </label>
        <br />
        <label>
          Title:
          <input
            className="ResourceForm"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Link:
          <input
            className="ResourceForm"
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            className="ResourceForm"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Keywords:
          <input
            className="ResourceForm"
            type="text"
            value={keywords}
            onChange={(event) => setKeywords(event.target.value)}
          />
          <small>Separate multiple keywords with commas</small>
        </label>
        <br />
        <button type="submit">Add Resource</button>
      </form>
    </div>
  );
}

export default ResourceInput;
