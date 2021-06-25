import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Header from './Header';
import FormManager from './Main';
import '../styles/App.css';
import About from './About';
import Preview from './Preview';

const App = () => (
  <Router>
    <Header />

    <main className="container-fluid">
      <div className="row py-4">
        <div className="col-md-3 d-flex flex-column mt-4">
          <Link
            to="/about"
            className="btn btn-outline-teal mb-3"
          >
            About
          </Link>
          <Link
            to="/editor"
            className="btn btn-outline-teal mb-3"
          >
            Editor
          </Link>
          <Link
            to="/preview"
            className="btn btn-outline-teal mb-3"
          >
            Preview
          </Link>
        </div>
        <div className="col-md-9 mt-4 wrapper">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/editor" element={<FormManager />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </div>
    </main>
  </Router>
);

export default App;
