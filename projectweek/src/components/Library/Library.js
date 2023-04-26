import react from 'react';
import './library.css';
import { BrowserRouter } from 'react-router-dom';
import ResourceLibrary from '../ResourceLibrary/ResourceLibrary';

function Library() {
  return (
    <div className="pages">
      <ResourceLibrary />
    </div>
  );
}

export default Library;
