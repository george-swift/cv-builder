import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { VscPreview } from 'react-icons/vsc';
import Header from './Header';
import Editor from './Main';
import About from './About';
import Preview from './Preview';
import { BuildProvider } from '../helpers/BuildContext';

import '../styles/App.css';

const App = () => (
  <BuildProvider>
    <Router>
      <Header />

      <main className="container-fluid">
        <div className="row py-4">
          <div className="col-md-3 d-flex flex-column mt-4">
            <Link
              to="/"
              className="btn btn-outline-teal mb-3 wrapper"
            >
              <BsInfoCircle />
              <span className="ms-2">About</span>
            </Link>
            <Link
              to="/editor"
              className="btn btn-outline-teal mb-3 wrapper"
            >
              <FaEdit />
              <span className="ms-2">Editor</span>
            </Link>
            <Link
              to="/preview"
              className="btn btn-outline-teal mb-3 wrapper"
            >
              <VscPreview />
              <span className="ms-2">Preview</span>
            </Link>
          </div>
          <div className="col-md-9 mt-4 wrapper">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  </BuildProvider>
);

export default App;
