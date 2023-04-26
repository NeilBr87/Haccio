import React, { useState } from 'react';
import ResourceList from '../ResourceList/ResourceList';
import './ResourceLibrary.css';

function ResourceLibrary() {
  const [filter, setFilter] = useState('');

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div classname="Resources">
      <input
        type="text"
        placeholder="Search documents..."
        value={filter}
        onChange={handleFilterChange}
      />

      <span className="headings">
        <p> Title</p>
        <p> Link</p>
        <p> Description</p>
        <p> Favourite </p>
      </span>
<hr></hr>
      <ResourceList filter={filter} />
    </div>
  );
}

export default ResourceLibrary;
